import pytest
from src.models.Input import model  

def test_model_instantiation_with_correct_type():
    # Valid case with correct data type for 'dois'
    example_dois = ["10.1000/182", "10.1001/292"]
    instance = model(dois=example_dois)
    assert instance.dois == example_dois


