from typing import Union, List, Annotated
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from database import engine
from models import User
from passlib.context import CryptContext
from jose import JWTError, jwt

SECRET_KEY = "74774abb02090efb9b94a2ebc822c9dfed2760aa89a9fd7e0d6cd4edda6ce531"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/token")

async def create(user: User.model):
    """
    Create a new user

    Parameters:username, password, email, full_name, disabled
    Returns: User, status code, message, token
    """
    temp = await engine.find_one(User.model, User.model.username == user.username)
    if temp:
        raise HTTPException(status_code=400, detail="Username is already taken")
    hashed_password = get_password_hash(user.password)
    new_user = User.model(username=user.username, password=hashed_password, email=user.email, disabled=False)
    new_user = await engine.save(new_user)
    return new_user

async def authenticate_user(username: str, password: str):
    """
    Authenticate user

    Parameters: username, password
    Returns: User
    
    """
    print(username, password)
    user = await engine.find_one(User.model, User.model.username == username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False 
    return user  

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_current_user(token: str = Depends(oauth2_scheme)):
        credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            username: str = payload.get("sub")
            if username is None:
                raise credentials_exception
        except JWTError:
            raise credentials_exception
        user = engine.find_one(User.model, User.model.username == token)
        if not user:
            raise credentials_exception
        return user

def create_access_token(data: dict):
    to_encode = data.copy()
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)