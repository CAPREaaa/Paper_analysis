from typing import Union, List, Annotated,Optional, Dict
import requests
from collections import defaultdict
from fastapi import Depends, HTTPException, status, UploadFile, File
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from entities import Query, Check, Graph
from models import Article
from database import engine
from odmantic import ObjectId
from urllib.parse import unquote
from io import StringIO
import pandas as pd
from thefuzz import fuzz
import glob

def is_retracted(df: pd.DataFrame):
    """
        Check if the article is retracted.

        :param df: The DataFrame containing the article metadata
        :return: True if the article is retracted, False otherwise
    """
    print(df)
    if 'update-to' in df.index:
        data = df.loc['update-to', 'message']
        for item in data:
            if item['type'] == 'retraction':
                return True
    return False

def authors(df: pd.DataFrame):
    """
        Extract the authors and their affiliations from the DataFrame.

        :param df: The DataFrame containing the article metadata
        :return: A tuple containing the list of affiliations and a list of author objects
    """
    data = df.loc['author', 'message']
    authors_affiliations = []
    auths = []
    for author in data:
        author_affiliations = []
        affs = author['affiliation']
        for aff in affs:
            aff = aff['name']
            aff = aff.split(",")[0]
            author_affiliations.append(aff)
            authors_affiliations.append(aff)
        
        first = author['given']
        last = author['family']
        
        auths.append(Article.author(first_name=first, last_name=last, affiliation=author_affiliations))
    return authors_affiliations, auths

def datetime(df: pd.DataFrame):
    return df.loc['created', 'message']['date-time']

def refrences(df: pd.DataFrame):
    """
        Extract the references from the DataFrame.

        :param df: The DataFrame containing the article metadata
        :return: A list of DOIs of the references
    """
    try:
        data = df.loc['reference', 'message']
        refs = []
        for ref in data:
            if 'DOI' in ref:
                refs.append(ref['DOI'])
    except:
        refs = []
    return refs

async def metadata_by_title_and_authors(title: str, authors: str):
    """
        Fetch the metadata of an article using the title and authors.

        :param title: The title of the article
        :param authors: The authors of the article
        :return: The metadata of the article
    """
    doi = ""
    url = f"https://api.crossref.org/works?query={title}&query.author={authors}"
    r = requests.get(url)
    if r.status_code != 200:
        raise HTTPException(status_code=r.status_code, detail=f"Oops error fetching {title}  {authors}")
    df = pd.read_json(StringIO(r.text))
    items = df.loc['items','message']
    article = {'item': [], 'match': 0.0}
    for item in items:
        local_title = item["title"][0]
        match = fuzz.ratio(local_title, title)
        if  match > article["match"]:
            article = {'item': item, 'match': match}
    return article["item"]


async def metadata(doi: str, abstract: str = "", keywords: list[str] = []):
    """
        Fetch the metadata of an article using the DOI.

        :param doi: The DOI of the article
        :param abstract: The abstract of the article
        :param keywords: The keywords of the article
        :return: The metadata of the article
    """
    doi = unquote(doi)
    url = f"https://api.crossref.org/works/{doi}"
    r = requests.get(url)
    if r.status_code != 200:
        raise HTTPException(status_code=r.status_code, detail=f"Oops error fetching {doi}")
    
    df = pd.read_json(StringIO(r.text))
    data = r.json()


   # Handle the possibility of missing fields
    try:
        retracted = is_retracted(df)
    except KeyError:
        retracted = False  # Assuming False as default for demonstration
    
    try:
        title = df.loc['title', 'message'][0]
    except KeyError:
        title = ""
    
    try:
        affs, auths = authors(df)
    except KeyError:
        affs, auths = [], []
    
    try:
        published_date = datetime(df)
    except KeyError:
        published_date = None  # Assuming None as default
    
    try:
        citation_count = df.loc['references-count', 'message']
    except KeyError:
        citation_count = 0
    
    try:
        citations = refrences(df)
    except KeyError:
        citations = []
    
    # Create the article object, handling missing fields
    article = Article.model(
        doi=doi, 
        title=title, 
        published_date=published_date,
        citation_count=citation_count, 
        retracted=retracted, 
        affiliation=affs,
        authors=auths,
        citations=citations,
        abstract=abstract,
        keywords=keywords
    )
    
    exists = await engine.find_one(Article.model, Article.model.doi == doi)
    if not exists:
        await engine.save(article)
    return article


async def articlate_dois(dois: list[str]):
    """
        Fetch the metadata of a list of articles using their DOIs.

        :param dois: The list of DOIs of the articles
        :return: The metadata of the articles
    """
    articles = []
    for doi in dois:
        article = await metadata(doi)
        articles.append(article)
    return articles

async def articlate_file(file: Annotated[UploadFile, File(description="A paper in form of a PDF file")]):
    """
        Extract the metadata of an article from a PDF file.

        :param file: The PDF file
        :return: The metadata of the article
    
    """
    f = await file.read()
    pdf = Query.Pdf.from_buffer(f)
    data = Query.Pdf.extract(pdf)
    print(data)
    
    doi = ""
    title = data["title"]
    authors = data["author"]
    dois = data["doi"]
    abstract = data["abstract"]
    #get the first element of each array in the list
    keywords= [item[0] for item in data["keywords"]]
    #capitalize the first letter of each keyword
    keywords = [item.capitalize() for item in keywords]


    
    if isinstance(dois, list):
        doi = dois[0]
    
    elif title and authors:
        article = await metadata_by_title_and_authors(title,authors)
        doi = article["DOI"]
        
    if not doi:
        raise HTTPException(status_code=404, detail=f"Article {title} by {authors} not found")
    
    article = await metadata(doi,abstract,keywords)     
    return article
    
    
async def articlate_files(files: Annotated[list[UploadFile], list[File(description="A paper in form of a PDF file")]]):
    """
        Extract the metadata of a list of articles from a list of PDF files.

        :param files: The list of PDF files
        :return: The metadata of the articles
    
    """
    articles = []
    for file in files:
        try:
            article = await articlate_file(file)
            articles.append(article)
        except HTTPException:
            print(f"File {file.filename} could not be processed.")
    return articles

async def articlate_path(path):
    """
        Extract the metadata of a list of articles from a directory of PDF files.

        :param path: The path to the directory
        :return: The metadata of the articles
    
    """
    print("inting database...")
    paths = glob.glob(f'{path}/**/*.pdf', recursive=True)
    for path in paths:
        try:
            pdf = Query.Pdf.from_file(path)
            data = Query.Pdf.extract(pdf)

            doi = ""
            title = data["title"]
            authors = data["author"]
            dois = data["doi"]
            
            if isinstance(dois, list):
                doi = dois[0]
            
            elif title and authors:
                article = await metadata_by_title_and_authors(title,authors)
                doi = article["DOI"]
                
            if not doi:
                continue
            
            print(f"initing {path} with doi {doi}")
            await metadata(doi)  
        except:
            print(f"ohno {path} failed!")
    return ""

async def delete_file(article_id: str):
    """
        Delete an article from the database.

        :param article_id: The ID of the article to delete
        :return: A message indicating the success of the deletion
    
    """
 # Convert string ID to ObjectId
    try:
        oid = ObjectId(article_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid article ID format")

    # Query the article by ID
    article = await engine.find_one(Article.model, Article.model.id == oid)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    # Delete the article
    await engine.delete(article)
    return {"message": "Article deleted successfully"}


async def edit_article(article_id: str, article: Article.model):
    """
        Edit an article in the database.

        :param article_id: The ID of the article to edit
        :param article: The updated article data
        :return: The updated article
    
    
    """
    # Convert string ID to ObjectId
    try:
        oid = ObjectId(article_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid article ID format")

    # Query the article by ID
    old_article = await engine.find_one(Article.model, Article.model.id == oid)
    if not old_article:
        raise HTTPException(status_code=404, detail="Article not found")

    # Update the article
    article = await engine.save(article)
    return article



async def article_with_references_via_key(key: str):
    """
        Fetch an article and its references using the DOI or title.

        :param key: The DOI or title of the article
        :return: The article and its references
    
    """
    if Check.Check.is_doi(key):
        if (
            article := await engine.find_one(Article.model, Article.model.doi == key)
        ) is None:
            raise HTTPException(status_code=404, detail=f"Article {key} not found")
        print("===doi===", key)
    else:
        if (
            article := await engine.find_one(Article.model, Article.model.title == key)
        ) is None:
            raise HTTPException(status_code=404, detail=f"Article {key} not found")
        print("===title===")
    
    references = article.citations
    articles = await articlate_dois(references)
    articles.insert(0, article)
    return articles

async def articles_via_keyword(keyword: str):
    """
        Fetch articles using a keyword.

        :param keyword: The keyword to search for
        :return: The articles with the specified keyword
    
    """

    all_articles = await engine.find(Article.model)

    def is_keyword_matched(article):
        article_keywords = [kw.lower() for kw in article.keywords if kw] 
        return keyword.lower() in article_keywords
    

    matched_articles = list(filter(is_keyword_matched, all_articles))

    if not matched_articles:
        raise HTTPException(status_code=404, detail="No articles found for the specified keyword.")

    return matched_articles


async def graph_data(articles: List[Article.model], num_clusters: int = 5) -> List[Dict]:
    """
        Generate graph data for the frontend.

        :param articles: The list of articles
        :param num_clusters: The number of clusters to create
        :return: The graph data for the frontend
    
    """

    documents = [' '.join(article.keywords) if article.keywords else '' for article in articles]
    

    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(documents)
    

    kmeans = KMeans(n_clusters=num_clusters)
    kmeans.fit(tfidf_matrix)
    clusters = kmeans.labels_.tolist()


    data_for_frontend = []
    for i, article in enumerate(articles):
        authors = [f"{auth.first_name} {auth.last_name}" for auth in article.authors if auth.first_name and auth.last_name]
        data_for_frontend.append({
            "id": article.doi,
            "name": article.title,
            "group": clusters[i],
            "authors": authors,
            "cluster_keywords": [vectorizer.get_feature_names_out()[index] for index in kmeans.cluster_centers_.argsort()[clusters[i], :]]
        })
    

    author_to_articles = defaultdict(list)
    for article_data in data_for_frontend:
        for author in article_data['authors']:
            author_to_articles[author].append(article_data['id'])

    links = []
    for articles in author_to_articles.values():
        if len(articles) > 1:
            for i in range(len(articles)):
                for j in range(i + 1, len(articles)):
                    links.append({
                        "source": articles[i],
                        "target": articles[j],
                        "value": 1  
                    })

    for link in links:
        data_for_frontend.append(link)
    
    return data_for_frontend





async def articles_via_author(search_author: str):
    """
        Fetch articles using an author's name.

        :param search_author: The author's name to search for
        :return: The articles with the specified author
    
    """
    all_articles = await engine.find(Article.model)

    def is_author_matched(article):
        for author_instance in article.authors:
            full_name = f"{getattr(author_instance, 'first_name', '')} {getattr(author_instance, 'last_name', '')}".strip()
            if search_author.lower() in full_name.lower():
                return True
        return False

    matched_articles = list(filter(is_author_matched, all_articles))

    if not matched_articles:
        raise HTTPException(status_code=404, detail="No articles found for the specified author.")

    return matched_articles


async def generate_graph(type: str):
    p = Graph.timeline()
    script, plot = Graph.components(p)
    graph = {
        "script": script,
        "plot": plot
    }
    return graph