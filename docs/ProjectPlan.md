# Project Plan


## Introduction

The project aims to develop a platform to analyze academic papers in different formats uploaded by the user, illustrating multiple relationships to help researchers find the connection among them.

We are planning to develop a web application powered by separate front-end and back-end with a database, having a three-tier architecture to present, handle logic and manage data resources. The front-end supports the user to interact through their web browser, and their actions will be sent to the back-end. The back-end processes the request, involves querying the database, and sends the data back to the front-end, updating the user interface. This architecture can make our application more organized, scalable, and easier to develop and maintain. Each layer can be developed independently using suitable technologies.


## General tasks
1. **Links between Authors**: Identify and visualize the co-authorship and collaborative networks among authors, highlighting their shared works and impact within the academic community.
2. **Links between Topics**: Analyze and map the relationships between various research topics, showing how they intersect and evolve over time.
3. **Clusters of Paper around Topics**: Group papers by related topics using keyword analysis and metadata to form clusters that represent the landscape of research in specific areas.
4. **Paper Reference Networks**: Construct visual networks that display the citation relationships between papers, showcasing the lineage and influence of scholarly works.
5. **Upload Resources (PDF/doc)**: Allow users to upload academic resources in various formats for analysis and inclusion in the application’s dataset.
6. **Extract Information from Resources**: Implement algorithms to automatically extract and process information from uploaded documents, such as titles, authors, keywords, and references.
7. **Interactive Visualization**: Create dynamic and interactive visualizations that enable users to explore the data, uncover insights, and understand the relationships within the academic landscape.

## All tasks with details

### Infrastructure
| ID | Task | Time/Workload | Story Point | Dependencies | Resources | Description |
|----|------|---------------|-------------|--------------|-----------|-------------|
| Inf-001 | Setting CI Pipeline Up | 2 hours | 1 | None | CI/CD platform access, documentation | Set up Continuous Integration (CI) pipeline by installing the CI runner, configuring the `.gitlab-ci.yml` or equivalent file in the repository, and ensuring the pipeline executes properly with a basic test script. |
| Inf-002 | Initializing the Front-End Project | 1 hour | 0.5 | Inf-001 | Next.js documentation, Node.js | Scaffold the front-end project using Next.js, setting up a standard directory structure, and installing initial dependencies like React and Tailwind CSS. |
| Inf-003 | Initializing the Back-End Project | 1 hour | 0.5 | Inf-001 | FastAPI documentation, Python | Initialize the back-end project using FastAPI, creating the basic project structure and installing essential packages such as UVicorn for ASGI support. |
| Inf-004 | Setting the Workflow | 2 hours | 1 | Inf-002, Inf-003 | Project management tools | Establish a development workflow that includes branch naming conventions, merge request procedures, and code review policies to ensure a smooth development process. |


### Front-End
#### 1. UI Design

| ID     | Task                | Time/Workload | Story Point | Dependencies | Resources                    | Description                                                                                                                                                               |
|--------|---------------------|---------------|-------------|--------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FE-001 | UI Design           | 20 hours      | 8           | None         | Design software (e.g., Figma, Sketch) | Design the UI/UX of the application, focusing on the visualization components for displaying links between authors, topics, paper clusters, and reference networks.       |
| FE-001a| Wireframe Creation  | 6 hours       | 2           | None         | Figma, Sketch                | Create wireframes for the main pages (home page, search result page, user dashboard), laying out the structural framework of these pages.                                 |
| FE-001b| Visual Design       | 8 hours       | 3           | FE-001a      | Figma, Adobe XD              | Develop the visual aspects of the UI, including color schemes, typography, and element styling, ensuring accessibility and consistency across the application.            |
| FE-001c| Prototype Creation  | 4 hours       | 2           | FE-001b      | Figma, Sketch                | Build interactive prototypes based on the wireframes and visual designs to simulate user interaction and finalize the UI/UX design before implementation.                  |
| FE-001d| Design Review       | 2 hours       | 1           | FE-001c      | -                            | Conduct a thorough review of the design prototypes with stakeholders to gather feedback and make necessary adjustments before moving on to the development phase.          |

#### 2. Basic Pages and layout
| ID     | Task                         | Time/Workload | Story Point | Dependencies | Resources                       | Description                                                                                                                      |
|--------|------------------------------|---------------|-------------|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| FE-002 | Basic Pages and Layout       | 10 hours      | 4           | FE-001       | Next.js, Tailwind CSS, TypeScript, ESLint | Implement the basic layout and frame of the application, including header, footer, and navigation components that are consistent across all pages. |
| FE-002a| Setup Next.js with TypeScript| 2 hours       | 1           | FE-001       | Next.js, TypeScript             | Initialize the Next.js project with TypeScript support to ensure type safety and enhance code quality throughout the development process.            |
| FE-002b| Integrate Tailwind CSS       | 1 hour        | 0.5         | FE-002a      | Tailwind CSS                    | Configure Tailwind CSS in the Next.js project for utility-first styling, enabling rapid UI development with consistent design across the application. |
| FE-002c| Implement Header Component   | 3 hours       | 1           | FE-002b      | React, Tailwind CSS, TypeScript | Develop the header component, including the application logo, navigation links, and responsive design adjustments.                                  |
| FE-002d| Implement Footer Component   | 2 hours       | 1           | FE-002c      | React, Tailwind CSS, TypeScript | Create the footer component with copyright information, navigation links, and any relevant contact details.                                        |
| FE-002e| Setup ESLint with TypeScript | 1 hour        | 0.5         | FE-002a      | ESLint, TypeScript              | Configure ESLint in the project to enforce coding standards and detect potential issues, integrating with TypeScript for type-based linting rules.   |
| FE-002f| Create Layout Wrapper         | 1 hour        | 0.5         | FE-002d, FE-002e | React, Tailwind CSS, TypeScript | Design a layout wrapper component to encapsulate the header, footer, and main content area, ensuring consistency across all pages.                 |

#### 3. Home Page
| ID     | Task                            | Time/Workload | Story Point | Dependencies | Resources                         | Description                                                                                                                                |
|--------|---------------------------------|---------------|-------------|--------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| FE-003 | Home Page                       | 8 hours       | 3           | FE-002       | Next.js, Tailwind CSS, TypeScript, ESLint | Develop the home page with an introductory section, search functionality, and quick links to major features of the application.            |
| FE-003a| Design Home Page Layout         | 2 hours       | 1           | FE-002f      | Figma, Sketch                     | Design the layout for the home page, focusing on user engagement and intuitive navigation to various sections of the application.          |
| FE-003b| Implement Introductory Section  | 2 hours       | 1           | FE-003a      | React, Tailwind CSS, TypeScript   | Create the introductory section of the home page, incorporating engaging visuals and concise text that welcomes and informs new visitors.   |
| FE-003c| Develop Search Functionality    | 3 hours       | 1           | FE-003a      | React, Next.js, TypeScript        | Implement the search bar and functionality, enabling users to search for papers, authors, or topics directly from the home page.           |
| FE-003d| Add Quick Links to Features     | 1 hour        | 0.5         | FE-003b, FE-003c | React, Tailwind CSS, TypeScript   | Incorporate quick links to major application features such as recent papers, popular topics, and author networks for easy access by users. |

#### 4. Search Result Page
| ID     | Task                                  | Time/Workload | Story Point | Dependencies       | Resources                             | Description                                                                                                                                                                           |
|--------|---------------------------------------|---------------|-------------|--------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FE-004 | Search Result Page                    | 15 hours      | 6           | FE-002, FE-003     | Next.js, Tailwind CSS, TypeScript, ESLint | Create the search results page that displays filtered articles, author links, topic connections, and allows for dynamic, interactive exploration of paper clusters and topic links.    |
| FE-004a| Implement Results Layout              | 3 hours       | 1           | FE-003d            | Figma, Sketch                         | Design the layout for the search results page, including sections for displaying articles, author links, and topic connections in a clear, user-friendly manner.                      |
| FE-004b| Develop Article Result Components    | 4 hours       | 2           | FE-004a            | React, Tailwind CSS, TypeScript       | Build individual components for displaying articles in the search results, including title, authors, and a brief summary, with links to view more details.                            |
| FE-004c| Implement Author and Topic Links     | 3 hours       | 1           | FE-004b            | React, Tailwind CSS, TypeScript       | Create components to display author links and topic connections related to the search query, allowing users to navigate to detailed views of these entities.                          |
| FE-004d| Integrate State Management            | 2 hours       | 1           | FE-004a, FE-004b   | React, Redux/Context API, TypeScript | Set up state management for handling the state of search results, including the storage and retrieval of search queries and the results data.                                         |
| FE-004e| Dynamic Interaction for Paper Clusters| 3 hours       | 1.5         | FE-004c, FE-004d   | React, D3.js (if needed), TypeScript | Implement dynamic and interactive elements that allow users to explore paper clusters and topic links visually, enhancing user engagement with the search results.                     |


#### 5. User Authentication
   1. Login
   2. Register


| ID     | Task                                      | Time/Workload | Story Point | Dependencies | Resources                                 | Description                                                                                                                                                           |
|--------|-------------------------------------------|---------------|-------------|--------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FE-005 | User Authentication                       | 8 hours       | 4           | FE-002       | Next.js, Tailwind CSS, TypeScript, ESLint | Implement user authentication, including login and registration functionalities, with form validation and user feedback, using JWT tokens for secure session management. |
| FE-005a| Setup Authentication Framework            | 1 hour        | 0.5         | FE-002       | Next.js, TypeScript                       | Configure the front-end project to integrate with the back-end JWT authentication system, including setting up utilities for handling JWT tokens.                     |
| FE-005b| Design Login Page                         | 2 hours       | 1           | FE-005a      | Figma, Sketch, Tailwind CSS               | Design the UI for the login page, ensuring it is intuitive and user-friendly while following the application's overall design system.                                 |
| FE-005c| Implement Login Functionality             | 2 hours       | 1           | FE-005b      | React, Next.js, TypeScript                | Develop the login functionality, creating a form that captures user credentials, validates them, and communicates with the back-end to authenticate the user.          |
| FE-005d| Design Registration Page                  | 2 hours       | 1           | FE-005a      | Figma, Sketch, Tailwind CSS               | Design the UI for the registration page, including form fields for user information and validation feedback, aligning with the application's design principles.        |
| FE-005e| Implement Registration Functionality      | 2 hours       | 1           | FE-005d      | React, Next.js, TypeScript                | Develop the registration functionality, enabling new users to create an account by submitting their details to the back-end for processing and authentication.         |
| FE-005f| Implement Client-side Form Validation    | 1 hour        | 0.5         | FE-005c, FE-005e | React, Yup (or similar library), TypeScript| Add client-side validation for login and registration forms to provide immediate feedback on input errors, using a schema validation library like Yup for consistency.   |

#### 6. User Dashboard
   1. Profile
   2. Resource Management

| ID     | Task                                         | Time/Workload | Story Point | Dependencies | Resources                                     | Description                                                                                                                                                    |
|--------|----------------------------------------------|---------------|-------------|--------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FE-006 | User Dashboard                               | 18 hours      | 8           | FE-005       | Next.js, Tailwind CSS, TypeScript, ESLint     | Develop the user dashboard for profile management and resource management, integrating file upload functionality and displaying status of uploaded resources.  |
| FE-006a| Design User Dashboard Layout                 | 3 hours       | 1           | FE-005       | Figma, Sketch, Tailwind CSS                   | Design the layout of the user dashboard, ensuring it provides a clear overview of the user's profile and resources with easy navigation to management features.|
| FE-006b| Implement Profile View and Edit              | 4 hours       | 2           | FE-006a      | React, Next.js, TypeScript                    | Develop the profile section within the dashboard, allowing users to view and edit their personal information, with validation and immediate feedback.            |
| FE-006c| Setup Resource Management Functionality      | 3 hours       | 1.5         | FE-006a      | React, Next.js, TypeScript                    | Implement the functionality for users to manage their uploaded resources, including listing, uploading new resources, and editing or deleting existing ones.     |
| FE-006d| Integrate File Upload Component              | 4 hours       | 2           | FE-006c      | React, Next.js, file handling libraries       | Integrate a file upload component to allow users to upload documents, including progress indicators and success/error messages.                                   |
| FE-006e| Implement Resource Editing and Deletion      | 2 hours       | 1           | FE-006d      | React, Next.js, TypeScript                    | Develop UI components and functionality for editing resource metadata and deleting resources, with confirmation prompts to prevent accidental deletion.           |
| FE-006f| State Management for User Dashboard          | 2 hours       | 0.5         | FE-006b, FE-006e | React, Redux/Context API, TypeScript         | Implement state management to handle the state across the user dashboard, particularly for user information and the list of uploaded resources.                  |


### Back-End
#### 1. File Processing
| ID     | Task                                         | Time/Workload | Story Point | Dependencies | Resources                        | Description                                                                                                                                    |
|--------|----------------------------------------------|---------------|-------------|--------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| BE-001 | File Processing                              | 16 hours      | 6           | Inf-003      | See listed libraries             | Develop the functionality to process uploaded files, extracting essential information like titles, authors, and references using relevant libraries. |
| BE-001a| Setup File Upload Endpoint                   | 2 hours       | 1           | Inf-003      | FastAPI, python-multipart        | Create an API endpoint using FastAPI to handle file uploads, ensuring the backend can receive documents for processing.                         |
| BE-001b| Integrate PDF Processing                     | 4 hours       | 2           | BE-001a      | PyPDF2, pdfminer.six, tika       | Implement functionality to extract text and metadata from uploaded PDF documents, using libraries like PyPDF2, pdfminer.six, and Tika.            |
| BE-001c| Develop Text Extraction for DOCX             | 3 hours       | 1.5         | BE-001a      | python-docx, tika                | Add support for extracting text and metadata from DOCX files, utilizing python-docx and Tika for comprehensive file handling.                      |
| BE-001d| Implement Information Extraction             | 4 hours       | 1.5         | BE-001b, BE-001c | pandas, PyPDF2, python-docx, tika, thefuzz, rapidfuzz | Develop algorithms to identify and extract key information (e.g., titles, authors, references) from the text obtained from PDF and DOCX files.    |
| BE-001e| Testing File Processing Functions            | 3 hours       | 1           | BE-001d      | pytest, mongomock, pytest-asyncio| Write unit and integration tests for file processing functionalities, ensuring accuracy in information extraction and error handling.               |

#### 2. Database Setup

| ID     | Task                                         | Time/Workload | Story Point | Dependencies | Resources               | Description                                                                                                                                              |
|--------|----------------------------------------------|---------------|-------------|--------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| BE-002 | Database Setup                               | 8 hours       | 3           | Inf-003      | odmantic, FastAPI, MongoDB | Configure the MongoDB database, defining schemas for users, papers, authors, and topics to support the application's data storage needs using odmantic.  |
| BE-002a| Install and Configure MongoDB                | 1 hour        | 0.5         | Inf-003      | MongoDB                  | Install MongoDB on the server and configure it for use with the application, ensuring proper security settings and initial database creation.             |
| BE-002b| Define Data Models with ODMantic            | 3 hours       | 1           | BE-002a      | odmantic, MongoDB        | Use odmantic to define data models for users, papers, authors, and topics, translating application requirements into MongoDB collections and documents.  |
| BE-002c| Setup MongoDB Connection with FastAPI       | 2 hours       | 1           | BE-002b      | FastAPI, odmantic, MongoDB | Configure FastAPI to connect to the MongoDB database using odmantic, ensuring seamless communication between the application server and the database.     |
| BE-002d| Create Initial Database Seeding Script (Optional)      | 2 hours       | 0.5         | BE-002c      | Python, odmantic         | Develop a script to seed the database with initial data for testing purposes, covering various use cases and ensuring the models are correctly defined. |


#### 3. API design
| ID     | Task                                         | Time/Workload | Story Point | Dependencies | Resources                        | Description                                                                                                                                          |
|--------|----------------------------------------------|---------------|-------------|--------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| BE-003 | API Design                                   | 10 hours      | 4           | BE-002       | FastAPI, Swagger, Postman        | Design a RESTful API that defines the endpoints for user authentication, file uploads, information retrieval, and dynamic data visualization.       |
| BE-003a| Identify API Endpoints                       | 2 hours       | 1           | BE-002       | -                                | List and categorize all necessary API endpoints needed for the application, including those for user management, resource uploads, and data queries. |
| BE-003b| Define Endpoint Schemas with Pydantic       | 3 hours       | 1.5         | BE-003a      | Pydantic, FastAPI                | Use Pydantic models to define request and response schemas for each endpoint, ensuring data validation and serialization.                            |
| BE-003c| Setup Swagger Documentation                 | 2 hours       | 1           | BE-003b      | FastAPI, Swagger                 | Configure Swagger UI for FastAPI to auto-generate interactive API documentation from the endpoint definitions and schemas.                           |
| BE-003d| Test Endpoint Definitions with Postman      | 3 hours       | 1.5         | BE-003b      | Postman                          | Create a Postman collection to manually test and validate the behavior of each defined endpoint, ensuring they meet the functional requirements.     |



#### 4. API implementation
   1. Interacting with Database
   2. Logic processes for different API calls
   3. Graph Generation

| ID     | Task                                           | Time/Workload | Story Point | Dependencies | Resources                                      | Description                                                                                                                                                           |
|--------|------------------------------------------------|---------------|-------------|--------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BE-004 | API Implementation                             | 47 hours      | 19          | BE-002, BE-003| FastAPI, odmantic, Bokeh, scikit-learn, thefuzz | Implement API endpoints and develop the business logic for handling API requests, including interacting with the database, processing logical operations for different API calls, and generating graphs for visualization.  |
| BE-004a| Implement Database Interaction Endpoints       | 15 hours      | 6           | BE-003       | FastAPI, odmantic                               | Develop endpoints to handle CRUD operations on the database for users, papers, authors, and topics, utilizing odmantic models for data validation and serialization. |
| BE-004b| Setup Graph Generation Endpoint                | 10 hours      | 4           | BE-004a      | FastAPI, Bokeh                                  | Create an endpoint for generating and returning interactive graphs based on user queries, using Bokeh to visualize data such as paper citation networks.              |
| BE-004c| Implement User Authentication Endpoints        | 8 hours       | 3           | BE-003       | FastAPI, passlib, python-jose                    | Develop secure authentication endpoints for user login and registration, incorporating JWT tokens for session management and security.                                |
| BE-004d| Develop Logic for Article Search               | 7 hours       | 3           | BE-004a      | FastAPI, thefuzz, rapidfuzz, scikit-learn        | Implement the business logic for processing article search queries, including keyword matching and relevance scoring, to return the most pertinent results.           |
| BE-004e| Implement File Upload and Processing Endpoint  | 7 hours       | 3           | BE-004a      | FastAPI, python-multipart, PyPDF2, pdfminer.six  | Create an endpoint for file uploads, where users can submit documents to be processed and integrated into the database, utilizing file handling libraries for data extraction. |



## Project Management Approach and Evidence

Please check the [Project Management](Project_Management.md) document, and the [workflow document](Workflow.md) for our team.


## Timeline

[Gantt Chart Timeline](gantt_chart_timeline.md)



