from typing import List,Dict,Union,Optional
from pydantic import BaseModel
from odmantic import Model
from datetime import datetime

class author(Model):
    first_name: str
    last_name: str
    affiliation: List[str]

class scema(BaseModel):
    doi: str
    title: str
    published_date: Optional[datetime] = None
    authors: list[author]
    citations: list[str]
    citation_count: int
    retracted: bool
    affiliation: list[str]
    abstract: str
    keywords: Optional[list[str]] = []


class model(Model):
    doi: str
    title: str
    published_date: Optional[datetime] = None
    authors: List[author]
    citations: List[str]
    citation_count: int
    retracted: bool
    affiliation: List[str]
    abstract: str
    keywords: Optional[list[str]] = []


    model_config = {
        "collection": "Articles"
    }
    
