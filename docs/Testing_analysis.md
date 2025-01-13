# Testing Analysis

## Introduction

This test aims to conduct a comprehensive test and verification of the back-end services of this project. The core goal of the test is to ensure that the back-end service can efficiently and accurately complete the four basic functions of the database: create (Create), read (Read), update (Update), and delete (Delete). In addition, the test will cover the correctness of each interface, including the interface's response time, error handling, and data finding and processing capabilities in complex queries.

Through this test, we hope to identify and resolve any potential issues in the back-end services and ensure the stability and reliability of the system. Ensuring that the backend is functioning properly is critical to ensuring the user experience of the entire application, and this test will provide a solid foundation to achieve this goal.

## Testing Environment Setup

- **Version**: This test will be executed on Python 3.9 version. This version was chosen because it provides the best compatibility with the features required for our project, while ensuring sufficient stability and broad community support.

- **Test Tool**: As the main testing framework, Pytest provides a variety of functions for our testing, including assertion rewriting, rich plug-in architecture, powerful firmware management, etc. Pytest was chosen because of its excellent scalability and ease of use, and its ability to effectively support complex testing requirements.

- **Test Dependencies**:Listed below are the dependency packages and their versions required to perform tests. These dependency packages will be obtained from the project's requirements document, ensuring that all test environments are consistent with development and production environments, thereby providing repeatable test results.
    - **mongomock**: A lightweight library for simulating MongoDB operations, allowing testing of database-related code without accessing the actual database.
    - **pytest-asyncio**: A pytest plugin designed for testing asynchronous code, providing the tools and features needed to run asynchronous tests.
    - **httpx**: A comprehensive HTTP client library that supports asynchronous requests for testing HTTP interfaces in backend services.
    - **bcrypt**: Provides password hashing functionality for handling authentication-related logic in tests.

## Testing Strategy

### Testing Range

This test will comprehensively cover the key functional modules of the back-end service to ensure that each component works as expected, while verifying the integration and interaction process of the entire system. Specific test scope includes:

- **Data verification module**: Ensure that the verification logic of input data is correct, including data format, data type and legality check of data values.
- **Database query module**: Verify the accuracy of database operations, including CRUD (create, read, update, delete) operations, as well as complex queries and data associations.
- **Business logic layer**: Test whether each business logic meets the functional requirements, including data processing rules, conditional processes.
- **Interface functio**n: Ensure that all API interfaces provided by the backend receive requests, process data and return correct responses in accordance with specifications.
- **Exception handling**: Test whether the system can correctly handle exceptions and give appropriate feedback when encountering unexpected input or operations.

### Testing Type

- **Unit testing**: For each independent module of the back-end service, test whether its function is implemented correctly, whether it can handle various inputs, and return the expected results.
- **Integration testing**: On top of unit testing, test whether the interactions between different modules are correct, including whether data flow and control flow can be accurately transferred between modules.

### Testing Methods

- **Regression testing**: Repeat testing of existing functions to ensure that new code submissions do not introduce new bugs or destroy existing functions.
- **Smoke testing**: At each major development stage, a basic test suite is executed to verify that the core functionality of the system is working properly.


## Testing Execution 

### 1. Controller_test

In the Article module of `Controller_test`, we designed multiple asynchronous test cases for the back-end article management function to ensure that the database operations and interface functions meet expectations. The execution of test cases relies on the pytest framework and uses the httpx library to simulate client requests. During testing, each use case will launch FastAPI’s test client and make requests to verify the following key functionality:

- `test_is_retracted`: Verify whether the logic of whether the article has been withdrawn is accurate.
- `test_datetime`: Check whether the date and time fields in the article metadata are processed and returned correctly.
- `test_references`: Test whether the reference parsing function can correctly extract the document citation list.
- `test_metadata_by_title_and_authors`: Verify the function of querying article metadata based on title and author.
- `test_metadata`: Check the accuracy of querying article metadata through DOI.
- `test_edit_article`: Test whether the interface for editing article information works as expected.

All tests are executed in an isolated test environment, which means they do not affect the actual production database or state. Before each test is executed, the system automatically sets up the required test data and cleans it after the test is completed.

### 2. Models_test

In `Models_test`, we designed a series of test cases for the two data models, Article and User, to verify whether the Pydantic schema of the data model can accurately perform verification and ensure that field values meet predetermined requirements. Each test case is executed independently to verify whether the attributes and verification logic defined by the model work as expected. These tests include:

- For the Article model, test data creation and field validation under normal circumstances.
- For the User model, test object creation with required and optional fields provided.
- Tests whether the User model will throw a ValidationError exception when necessary fields are missing.

Testing is performed in an isolated environment to avoid interference with the production database or other test environments.

### 3. Utils_test

In the `Utils_test` module, we conducted a series of tests to verify the accuracy and robustness of the tool functions. These tests mainly focus on DOI validation and PDF metadata processing functions:

- **DOI verification test (test_is_doi)**:
    - Using the pytest.mark.parametrize decorator, we performed a series of parameterized tests on the is_doi function. These tests cover a variety of possible DOI input situations, including valid DOIs, DOIs with special characters, and malformed DOI strings.
    - Each test instance passes an expected input and corresponding expected output to the is_doi function, and asserts whether its return value matches expectations.
- **PDF metadata and content extraction test**:
    - The `test_get_title` function tests the correctness of extracting the PDF title from metadata.
    - The `test_extract_author` function verifies the correct extraction of author information from PDF metadata.
    - The `test_extract_publication_date` function checks the ability to correctly extract publication dates from metadata.
    - The `test_extract_content` function tests the logic of correctly extracting key parts from the provided sample content.
    - The `test_extract_doi_with_metadata` function is used to verify whether DOI information can be correctly extracted when the given metadata and content are empty.


### 4. Main_test

- **Read article (test_read_article)**:
    - Use httpx.AsyncClient to asynchronously make requests to the article reading API.

- **Root path access (test_read_root)**:
    - Use TestClient to make requests synchronously to the root path "/".
    - It was tested whether the API's root path access was successful and whether the returned JSON response body matched expectations.

- **DOI query article (test_fetch_article_by_doi)**:
    - Use TestClient to make a POST request containing the DOI to the article query API.
    - Check whether the response status code is 422, indicating that the DOI format of the queried article is incorrect or the article does not exist.

- **File upload (test_upload_files)**:
    - Use httpx.AsyncClient to perform file upload operations asynchronously.


## Testing Results

In this testing activity, we comprehensively tested the core functions of the back-end service, including but not limited to the validity of the data model, the responsiveness of the API endpoints, and the accuracy of various tool functions. 

By using pytest and httpx tools, we conducted multi-level and multi-angle tests on the back-end services to ensure the robustness and reliability of the system. And the results of this test were very encouraging and all designed test cases passed successfully. In detail:

- All data models can correctly handle predetermined input data and effectively throw exceptions to deal with illegal input.
- API endpoint testing shows that the system can correctly handle requests and return expected response codes and data, regardless of normal scenarios or error handling.
- Tests of utility functions show that the functions maintain their accuracy and robustness even when faced with complex or non-standard input.


## Problem and Defect Analysis

### (1)Defect Density

In this test, all designed test cases passed successfully and no defects were directly found, so the defect density was zero. This shows that with the current test coverage and test case design, the code quality of the backend service is high and the defect distribution is extremely low. However, completely zero defects does not mean that the system is perfect, but that no problems were found within the existing testing scope.

### (2) Severity and Priority

Since all test cases passed, this test did not identify serious problems that needed to be resolved as a priority. In future tests, if any issues are discovered, they will be classified according to their severity according to their impact on system stability, security, and user experience, and the priorities for resolution will be determined accordingly.


## Improvement and Optimization Measures

Although the results of this test are good, we still need to pay attention to the following aspects to further improve code quality and system performance:

- **Enhanced test coverage**: Extend existing test cases to add boundary conditions, exception flows, and stress testing to reveal potential issues.
- **Code static analysis**: Use static code analysis tools to regularly check code quality and identify potential performance issues, code smells, or security vulnerabilities.

- **Low code reusability**: For duplicate code, consider abstracting and encapsulating shared functionality.
- **High coupling between modules**: optimize the code structure through design patterns and reduce dependencies between modules.

## Future Plan
- **Continuous integration and continuous testing**: Use testing as part of the continuous integration process to ensure that each code submission can automatically execute tests and detect and solve problems in a timely manner.
- **User feedback loop**: After product deployment, actively collect user feedback, adjust and add test cases based on actual usage scenarios, and continuously improve product quality.
- **Performance monitoring and optimization**: Implement runtime performance monitoring to identify and optimize system performance bottlenecks.



