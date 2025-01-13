from pydantic import BaseModel
from odmantic import Model

class scema(BaseModel):
    script: str
    plot: str

class model(Model):
    script: str
    plot: str
    model_config = {
        "collection": "Graphs"
    }
