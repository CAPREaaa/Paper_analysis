from typing import List,Dict
from pydantic import BaseModel
from odmantic import Model
from datetime import datetime

class model(Model):
    dois: List[str]
    model_config = {
        "collection": "Inputs"
    }
