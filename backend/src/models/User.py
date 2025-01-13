from pydantic import BaseModel
from odmantic import Model
from typing import Optional

class scema(BaseModel):
    username: str
    password: str
    email: str
    full_name: Optional[str] = None
    disabled: bool = False 


class model(Model):
    username: str
    password: str
    email: str
    full_name: Optional[str] = None
    disabled: bool

    model_config = {
        "collection": "Users"
    }

