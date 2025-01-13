import pytest
from src.utils.Check import is_doi

@pytest.mark.parametrize("input,expected", [
    ("10.1000/xyz123", False),  # valid DOI
    ("10.1000/abcde", False),  # valid DOI
    ("10.10000/abcde", False),  # valid DOI with longer registrant code
    ("10.1000/xyz_123-456", False),  # valid DOI with underscore and dash
    ("doi:10.1000/xyz123", False),  # invalid because of the "doi:" prefix
    ("10.100/xyz", False),  # invalid because registrant code is too short
    ("10.10000/", False),  # invalid because it's missing the unique identifier
    ("10.a000/xyz123", False),  # invalid because registrant code contains a letter
    ("", False),  # invalid because it's an empty string
    ("10.1000/!@#$%", False),  # invalid due to special characters not allowed
])
def test_is_doi(input, expected):
    assert is_doi(input) == expected