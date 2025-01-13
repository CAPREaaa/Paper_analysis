### 1. API Overview

#### 1.1 Introduction

**English:** The CrossRef REST API is a programmatic interface provided by CrossRef, enabling developers, researchers, and academic institutions to access its vast bibliography database. As a collaborative organization participated by multiple publishers, CrossRef aims to facilitate the accessibility and interconnectivity of scholarly publications. Through its REST API, CrossRef allows external systems to query publication metadata, including titles, authors, publication dates, journal information, DOIs, etc., supporting a wide range of academic and research activities. [CrossRef REST API Documentation](https://api.crossref.org/swagger-ui/index.html)
#### 1.2 Key Features

- **Comprehensive Metadata Access**: The API provides access to millions of scholarly records in the CrossRef database, covering various types of publications from scientific articles to conference papers, book chapters, etc.
- **Precise Retrieval Based on DOI**: Using the Document Object Identifier (DOI), the API can provide precise queries for specific documents. DOI is a permanent identifier used to uniquely identify objects in the digital environment.
- **Open Access**: The API can be queried without authentication, making it particularly convenient for individual researchers and small projects.
- **Supports Complex Queries**: In addition to document retrieval by DOI, the API supports complex queries based on author names, publication dates, journal names, etc., as well as sorting and filtering of results.
#### 1.3 Advantages

- **RESTful Architecture**: The API adopts a RESTful architecture design, making it easy to use and integrate, while being compatible with a variety of programming languages and development environments.
- **JSON Data Format**: The API responses are in JSON format, a lightweight data exchange format that is easy for humans to read and machines to parse.
- **Scalability**: The API is designed with future scalability in mind, supporting new query parameters and return fields to adapt to changes in the academic publishing field.
### 2. Preparation

 To start, you need to obtain an article's DOI, a typical format of which is "10.xxxx/xxxxx," composed of a prefix (usually 10 followed by a dot), a registrant code, a slash, and a recognizable sequence of characters. Verifying the DOI's validity is also crucial, which can be done by visiting [https://doi.org](https://doi.org/) followed by the DOI. If the DOI is valid, this will redirect to the official publishing page of the document.
### 3. Constructing Requests

- **Base URL**: All queries for a specific DOI should start with the base URL `https://api.crossref.org/works/`.
- **Complete URL Example**: For the DOI `10.1000/xyz123`, the full request URL would be `https://api.crossref.org/works/10.1000/xyz123`.
- **Extra URLs**：In addition to the previously mentioned `/works/` endpoint, the CrossRef API offers the following endpoints to support a broader range of data retrieval needs:

	- **/members/**: Retrieves information about publishers.
	- **/journals/**: Provides information on journals.
	- **/funders/**: Accesses information on funding organizations.
	- **/licenses/**: Finds document license information.
	- **/types/**: Understands the supported document types.
	- **/prefixes/**: Queries publisher information associated with specific DOI prefixes.
	- **/funding-data/**: Retrieves metadata related to research funding.
### 4. Sending Requests

- **Using Tools**: You can use Python's `requests` or JavaScript's `fetch` to send a GET request.
- **Example** (using Python):
    
    `import requests response = requests.get("https://api.crossref.org/works/10.1000/xyz123") data = response.json()`
### 5. Parsing Responses

- **Handling JSON**: The response will be returned in JSON format, with the `message` key containing the metadata of the publication. **Key Fields**:
    - `title`: The title of the article.
    - `author`: A list of authors, including their names and possibly their affiliations.
    - `issued`: The publication date.
    - `container-title`: The container of the publication (e.g., journal name).
    - `ISSN`: The ISSN number of the publication.
    - `publisher`: The publisher of the publication.
    - `abstract`: The abstract of the article (availability varies).
- **Field Extraction Example** (Python):
    
    `title = data['message']['title'][0]  # Extracting the title`
### 6. Error Handling

- **Common Errors**: An invalid DOI will return a 404 (Not Found) error, and too frequent requests may result in a 429 (Too Many Requests) error.
- **Recommended Strategy**: Implement error handling logic, such as retry mechanisms, request throttling, or user-friendly error messages.
### 7. Usage Tips

- **Rate Limiting**: Adhere to CrossRef's request rate limits and implement request rate limiting if necessary.
- **Data Caching**: Implement data caching strategies to reduce repetitive API requests, especially for frequently queried DOIs.
- **Content Negotiation**: Consider implementing content negotiation mechanisms to obtain responses in different formats (e.g., XML) as needed.
### 8. System Integration Considerations

- **API Wrapping**: Encapsulate API call logic within the system for ease of maintenance and potential expansion.
- **Asynchronous Handling**: Considering potential delays in API requests, use asynchronous calling patterns to avoid blocking the user interface or services.
- **Security**: Ensure all external requests are securely handled to prevent possible injection attacks or data breaches.
