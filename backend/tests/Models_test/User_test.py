from pydantic import ValidationError
import pytest
from src.models.User import scema  

def test_scema_creation():
    user_data = {
        "username": "testuser",
        "password": "testpassword",
        "email": "test@example.com",
    }
    user = scema(**user_data)
    assert user.username == "testuser"
    assert user.disabled == False  # Checking default value

def test_scema_with_optional_full_name():
    user_data = {
        "username": "testuser",
        "password": "testpassword",
        "email": "test@example.com",
        "full_name": "Test User",
    }
    user = scema(**user_data)
    assert user.full_name == "Test User"

def test_scema_validation_error():
    user_data = {
        "username": "testuser",
        # Missing password
        "email": "test@example.com",
    }
    with pytest.raises(ValidationError):
        scema(**user_data)
