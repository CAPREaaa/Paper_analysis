import tika
tika.initVM()
from tika import parser

from rakun2 import RakunKeyphraseDetector

import re
import io

def parse_pdf(path):
    """
    Parse a PDF file and return its metadata and content

    Parameters:path (str): Path to the PDF file
    Returns: Tuple[Dict[str, Any], str]: Tuple containing the metadata and content of the PDF
    
    """
    parsed_pdf = parser.from_file(path)

    metadata = parsed_pdf['metadata']
    content = parsed_pdf['content']

    return metadata, content

def get_title(metadata):
    """
    Extract the title of a PDF from its metadata

    Parameters: metadata (Dict[str, Any]): Metadata of the PDF
    Returns: str: Extracted title
    
    """
    # Define priority of title sources
    title_sources = ['dc:title', 'pdf:docinfo:title', 'dc:subject']
    
    for source in title_sources:
        # Check if the source key exists and has a meaningful value
        if source in metadata and metadata[source] and isinstance(metadata[source], str) and not metadata[source].startswith('<'):
            return metadata[source]

    # Fallback if no suitable title is found
    return ""

def extract_author(metadata):
    """
    Extract the author of a PDF from its metadata

    Parameters: metadata (Dict[str, Any]): Metadata of the PDF
    Returns: str: Extracted author
    
    """
    # Define priority of author sources
    author_sources = ['dc:creator', 'meta:author', 'pdf:docinfo:creator', 'pdf:docinfo:author', 'Author']

    for source in author_sources:
        # Check if the source key exists and has a meaningful value
        if source in metadata and metadata[source] and isinstance(metadata[source], str) and not metadata[source].startswith('<'):
            return metadata[source]

    # Fallback if no suitable author is found
    return ""

def extract_publication_date(metadata):
    """
    Extract the publication date of a PDF from its metadata

    Parameters: metadata (Dict[str, Any]): Metadata of the PDF
    Returns: str: Extracted publication date
    
    """
    
    # List of possible metadata fields where the publication date might be stored
    possible_date_fields = [
        'dc:date', 
        'pdf:docinfo:created', 
        'Creation-Date', 
        'xmp:CreateDate',
    ]
    
    # Check each field for a valid date
    for field in possible_date_fields:
        if field in metadata:
            # Assuming the first found date field is the publication date
            return metadata[field]
    
    return ""

def extract_content(text):
    """
    Extract the main content of a PDF by searching for common section titles

    Parameters: text (str): Text content of the PDF
    Returns: str: Extracted main content
    
    
    """
    sections_to_extract = ['Introduction', 'INTRODUCTION', 'Abstract', 'ABSTRACT', 'Background', 'BACKGROUND', 'Conclusion', 'CONCLUSION']
    for section in sections_to_extract:
        pattern = re.compile(rf'{section}\s*(.*?)(?:\n(?:\d+\.\s+|References|Bibliography)|$)', re.S | re.I)
        match = pattern.search(text)
        if match:
            return match.group(1).strip()
    return text

def extract_doi(metadata, text):
    try:
        doi = metadata['doi']
    except:
        doi_re = re.compile(r"10.\d{4,9}\/[-._;()/:A-Z0-9]+")
        doi = doi_re.findall(text)
        if (doi == []):
            doi = ""
    return doi
    
def from_buffer(file):
    return parser.from_buffer(io.BytesIO(file))

def from_file(path):
    return parser.from_file(path)

def extract(parsed_pdf):
    """
    Extract relevant information from a parsed PDF

    Parameters: parsed_pdf (Tuple[Dict[str, Any], str]): Tuple containing the metadata and content of the PDF
    Returns: Dict[str, Any]: Extracted information
    
    """
    metadata = parsed_pdf['metadata']
    content = parsed_pdf['content']

    title = get_title(metadata)
    author = extract_author(metadata)
    date = extract_publication_date(metadata)

    doi = extract_doi(metadata, content)

    abstract = extract_content(content)

    hyperparameters = {"num_keywords": 5,
                        "num_topics": 5,
                        "num_entities": 5,
                        "num_sentences": 5}
    keyword_detector = RakunKeyphraseDetector(hyperparameters)
    keywords = keyword_detector.find_keywords(abstract, input_type="string")
    # keyword_detector.visualize_network()

    return {
        'title': title, 
        'author': author, 
        'date': date,
        'doi': doi, 
        'keywords': keywords,
        'abstract': abstract
    }