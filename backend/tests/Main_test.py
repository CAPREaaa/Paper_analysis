from fastapi.testclient import TestClient 
import pytest
from httpx import AsyncClient, ASGITransport
import pandas as pd
import os
import sys
src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src'))
sys.path.append(src_dir)
from src.main import app 
from src.controller.Article import is_retracted, authors
from src.entities import Article, User, Graph


client = TestClient(app)

@pytest.mark.asyncio
async def test_read_article():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/v1/articles/1")
        assert response.status_code == 422

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}


def test_fetch_article_by_doi():
    response = client.post("/query/article", json={"article_doi": "10.100/testdoi"})
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_upload_files():
    async with AsyncClient(app=app, base_url="http://test") as client:
        files = {"file": ("filename.pdf", b"dummy PDF content", "application/pdf")}
        response = await client.post("/api/v1/query/files/", files=files)
        assert response.status_code == 422













