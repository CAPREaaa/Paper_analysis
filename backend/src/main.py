from typing import Union, List, Annotated, Optional
from datetime import datetime, timedelta
from fastapi import Depends, FastAPI, HTTPException, UploadFile, status, File, Path
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from entities import Article, User, Graph
from models import Input
from database import engine



@asynccontextmanager
async def lifespan(app: FastAPI):
    await Article.articlate_path("./Papers")
    yield

app = FastAPI(
    lifespan=lifespan,
    title="PSD API",
    summary="An application to help researches query relationships between research papers."
)

origins = [
    "http://localhost:3000",  
    "http://localhost:27017",  
    "http://localhost:8081",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/v1/articles/", summary="List Articles", description="This endpoint returns a list of articles", response_model=List[Article.model])
async def articles():
    return await engine.find(Article.model)

# Get article by ID API
@app.get("/api/v1/articles/{id}", response_model=Article.model)
async def read_article(article_id: str):
    return Article.get_article(article_id)

@app.post("/query/article")
async def read_article(article_doi: Annotated[str, Depends(Article.metadata)]):
    return article_doi

@app.post("/query/file/", response_model=Article.model)
async def read_file(file: Annotated[UploadFile, Depends(Article.articlate_file)]):  
    return file

# Upload files API
@app.post("/api/v1/query/files/", response_model=List[Article.model])
async def upload_files(files: List[UploadFile] = File(...)): 
    articles= await Article.articlate_files(files)
    return articles

# Return all articles APi
@app.get("/api/v1/query/articles", response_model=List[Article.model])
async def read_articles():
    articles = await engine.find(Article.model)
    return articles

# Delete certain article API
@app.delete("/api/v1/delete/article/{article_id}")
async def delete_article(article_id: str = Path(..., title="The ID of the article to delete")):
    message = await Article.delete_file(article_id)
    return message

# Edit certain article API
@app.put("/api/v1/edit/article/{article_id}", response_model=Article.model)
async def edit_article(article_id: str, article: Article.model):
   article= await Article.edit_article(article_id, article)
   return article


@app.post("/query/articles", response_model=List[Article.model])
async def read_articles(articles: Annotated[Input.model, Depends(Article.articlate_dois)]):
    return articles

@app.put("/article/put", response_model=Article.model)
async def insert_article(article: Annotated[Article.model, Depends()]):
    await engine.save(article)
    return article

# User login API
@app.post("/api/v1/auth/login") 
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user = await User.authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = User.create_access_token(data={"sub": user.username})

    return {"access_token": access_token, "token_type": "bearer"}
   
# User register API
@app.post("/api/v1/auth/register", response_model=User.model)
async def register(user:User.model):
   user = await User.create(user)
   return user

    
# Get data and graph result API
@app.get("/api/v1/result")
async def get_result(key: Optional[str] = "",
                     keyword: Optional[str] = "",
                     author: Optional[str] = ""):
    if key:
        print(f"Result for key {key}")
        articles = await Article.article_with_references_via_key(key)
        print(articles)
        return {"articles": articles}
    elif keyword:
        print(f"Result for keyword {keyword}")
        articles = await Article.articles_via_keyword(keyword)
        if len(articles) < 5:
            return {"articles": articles}
        graph_data= await Article.graph_data(articles)
        return {"articles": articles, "graph_data": graph_data}
    elif author:
        print(f"Result for author {author}")
        articles = await Article.articles_via_author(author)
        return {"articles": articles}
    else:
        raise HTTPException(status_code=400, detail="No valid query parameter provided")
    