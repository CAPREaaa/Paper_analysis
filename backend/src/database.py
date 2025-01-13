from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
import warnings
import os


class Database:
    """
    Database class to connect to MongoDB
    """
    host: str
    engine: AIOEngine
    def __init__(self):
        db_env = {
            "DB_URI": "localhost",
            "DB_PORT": 27017,
            "DB_ADMIN_USERNAME": "root",
            "DB_ADMIN_PASSWORD": "password",
        }
        env = dict(os.environ)
        for var, default in db_env.items():
            if var not in env:
                warnings.warn(f"Warning: Environment variable {var} is undefined, setting to {default}.")
            setattr(self, var, env.get(var, default))

    def connect(self):
        self.host = f"mongodb://{self.DB_ADMIN_USERNAME}:{self.DB_ADMIN_PASSWORD}@{self.DB_URI}:{self.DB_PORT}/api?authSource=admin"
        client = AsyncIOMotorClient(self.host)
        self.engine = AIOEngine(client=client, database="PSDdatabase")
        return self.engine

    def disconnect(self):
        print(f"Disconnnecting from DB {self.DB_URI}")

global engine
db = Database()
engine = db.connect()