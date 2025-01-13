import pytest
import src.utils.Pdf as Pdf

# Sample fixtures
@pytest.fixture
def sample_metadata():
    return {
        'dc:title': 'Sample PDF Title',
        'pdf:docinfo:title': 'Fallback Title',
        'dc:creator': 'Jane Doe',
        'pdf:docinfo:created': '2020-01-01T00:00:00Z'
    }

@pytest.fixture
def sample_content():
    return "Introduction This is the introduction. ABSTRACT This is the abstract. Conclusion This is the conclusion."


# Test get_title
def test_get_title(sample_metadata):
    assert Pdf.get_title(sample_metadata) == 'Sample PDF Title'

# Test extract_author
def test_extract_author(sample_metadata):
    assert Pdf.extract_author(sample_metadata) == 'Jane Doe'

# Test extract_publication_date
def test_extract_publication_date(sample_metadata):
    assert Pdf.extract_publication_date(sample_metadata) == '2020-01-01T00:00:00Z'

# Test extract_content
def test_extract_content(sample_content):
    extracted = Pdf.extract_content(sample_content)
    assert "This is the introduction." in extracted
    assert "This is the abstract." in extracted
    assert "This is the conclusion." in extracted

# Test extract_doi with metadata
def test_extract_doi_with_metadata():
    metadata = {'doi': '10.1000/xyz123'}
    content = ""
    assert Pdf.extract_doi(metadata, content) == '10.1000/xyz123'




