import pytest
from datetime import datetime
from src.models.Article import author, scema, model


# Pydantic Model Tests
def test_scema_model_validation():
    author_data = {
        "first_name": "John",
        "last_name": "Doe",
        "affiliation": ["University XYZ"]
    }
    article_data = {
        "doi": "10.1000/testdoi",
        "title": "Sample Article",
        "published_date": datetime.now(),
        "authors": [author_data],
        "citations": ["10.1001/example"],
        "citation_count": 1,
        "retracted": False,
        "affiliation": ["University ABC"],
        "abstract": "This is an abstract of the article.",
        "keywords": ["sample", "article"]
    }
    article = scema(**article_data)
    assert article.doi == "10.1000/testdoi"
    assert article.title == "Sample Article"
    assert len(article.authors) == 1
    assert article.citation_count == 1

