# test_models.py
from pydantic import ValidationError
import pytest
from src.models.Graph import scema, model

def test_scema_creation():
    # Valid case
    example_data = {
        "script": "A thrilling adventure.",
        "plot": "The hero faces numerous challenges."
    }
    instance = scema(**example_data)
    assert instance.script == "A thrilling adventure."
    assert instance.plot == "The hero faces numerous challenges."

def test_scema_failure():
    # Invalid case: missing 'script'
    incomplete_data = {
        "plot": "An incomplete story."
    }
    with pytest.raises(ValidationError):
        scema(**incomplete_data)

def test_model_creation():
    # Assuming synchronous context for demonstration
    example_data = {
        "script": "A thrilling adventure.",
        "plot": "The hero faces numerous challenges."
    }
    instance = model(**example_data)
    assert instance.script == "A thrilling adventure."
    assert instance.plot == "The hero faces numerous challenges."
