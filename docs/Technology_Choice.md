[toc]

### 1.Project Introduction

This document outlines the language and technology choices for our software development project, and infrastructure decisions for the development of a comprehensive academic paper analysis system. From a macro perspective, the intention is to create a system that can ingest, analyze, and visually represent complex datasets, thereby extracting valuable insights and presenting them in an intuitive and accessible manner.

### 2.Project Objectives

The project's main goal is to create a powerful data processing framework that can gather and handle data from a variety of academic paper sources.

- The top priority for us to pick these specific language tools, technologies, and framework is that they are modern, high-performance, easy to learn, fast to code, and ready for production. The application is built with React JS for web applications. The front-end side of the application is like feature-centric, with separate directories for different parts of the application’s functionality, including authentication, register, login, and search function.

- By employing text analysis methods, it aims to dive deep into the collected data to get valuable insights. Additionally, it focuses on creating user-friendly query and data visualization interfaces. These interfaces are designed to make it simpler for users to understand complex data analysis results by presenting them through clear and engaging graphics and charts. This approach not only enhances the accessibility of data but also makes the process of data analysis more interactive and insightful, catering to the needs of a diverse audience.


### 3 Technology and Infrastructure Selection

### 3.1 Version Control

For version control, our project uses Git with GitLab, which can greatly enhance our team's development process. GitLab is a complete DevOps platform that aids in the lifecycle of software development, from planning and source code management to monitoring and security. This combination not only supports efficient collaborative development across the team but also streamlines code versioning, ensuring that every change and addition is meticulously tracked.

Our work pipeline is designed to engage collaboration and streamline project workflows:

- When a new feature, requirement, or bug is identified, it is documented and added to the issue part on our Gitlab. Issues help in breaking down the software development project into manageable tasks that can be individually tracked and assigned.
- This ensures that every issue is visible, trackable, and assigned to a team member for resolution. 
- Our development process is guided by a specific workflow that includes understanding the issue thoroughly, applying to requirement specifications, local testing, and peer reviews through code review (CR) requests after CI tests pass. This process ensures our commitment to quality and collaborative review.

Besides, the introduction of feature branches ensures that the main branch remains stable, with developers creating separate branches for their work. This approach facilitates easier code reviews and merge requests, which are crucial for maintaining code quality, project coherence, and integrating with automated testing to maintain the stability and reliability of the software. Together, they provide a framework for structured, efficient, and collaborative software development, which helps teams build better software faster.

### 3.2 Programming Languages & Libraries

#### Front-end side

Beginning with our project’s front-end side, the front-end side of our application is being built with React, a server-rendered React application: 

- We would have **Next.js** as a framework for building server-rendered React applications, with Storybook serving as a tool for developing, testing, and documenting UI components in isolation. Storybook can be used alongside Next.js to facilitate component-driven development, collaboration, and efficient integration of components into the overall application. 

- **Tailwind CSS** is selected for the front-end development of the system due to its utility-first approach, which enables rapid and responsive UI design. This framework supports the creation of custom and complex visualizations required by the system, while ensuring consistency and maintainability:

    - Tailwind's responsive design capabilities ensure that our application is accessible on various devices, crucial for accommodating the varied work environments of researchers and analysts. 
    - Additionally, the framework's focus on minimalistic CSS output aligns with our performance objectives, as it helps to keep the application lightweight and fast. 
    - The strong community and rich ecosystem around Tailwind provide extensive resources and support, which will be invaluable in crafting an intuitive and visually cohesive user experience. 
    - The developer-friendly nature of Tailwind also enhances productivity and facilitates maintainability as the project scales, making it a strategic choice for our front-end development needs.

- We have chosen **TypeScript** as our technology choice for paper analysis system due to its robust type system, which significantly enhances code quality and developer productivity—key factors when dealing with complex data structures and analysis algorithms inherent in this project:

    - TypeScript's static typing helps in early error detection and provides better documentation through code, facilitating smoother collaboration within a team. It is particularly well-suited for scalable applications, allowing for organized and maintainable codebases that can grow with the system's needs.
    - The language's compatibility with a plethora of modern frameworks is ideal for creating the interactive visualizations required for the system. 
    - Moreover, the extensive community support and rich ecosystem of TypeScript ensure access to a wide range of tools and libraries, which will accelerate development and long-term maintenance. 
    - The cross-platform capabilities of TypeScript-generated JavaScript align with the flexible deployment needs of the project, making TypeScript an exemplary choice that aligns with our goals of robustness, maintainability, and scalability.

- Besides, we have **ESLint** selected as a key technology choice for the system to ensure code quality and maintainability, which are crucial for the long-term success of a project with complex data analysis requirements. ESLint is a static code analysis tool that helps identify and fix problems in JavaScript codebases, which is particularly beneficial when using TypeScript as TypeScript code is transpiled to JavaScript:
    - As a static code analysis tool, ESLint enforces consistent coding standards across the diverse team, facilitating collaboration and readability. It aids in the early detection and correction of errors, which is essential when dealing with intricate data analysis and processing. 
    - Furthermore, ESLint's customizability allows us to define rules that align with our project's specific requirements, promoting best practices that are critical for robust and efficient code.
    - The added support for TypeScript through plugins makes ESLint a harmonious fit for our chosen development language, reinforcing our commitment to a reliable and maintainable system.

#### Back-end side

From our project’s back-end side, Python has been chosen as the primary programming language for this project due to its simplicity, versatility, and robust ecosystem. Its straightforward syntax makes it highly accessible to every team member, allowing for rapid development and iteration. Python's extensive selection of libraries, particularly in data processing (here we would use Tika-python, a simple interface for parsing PDF files), natural language processing (NLTK), and visualization (using Bokeh and Networkx Python Package), provides a powerful toolkit that can address the project's requirements efficiently. Overall, Python is an ideal choice for building this paper analysis application that requires complex data analysis and user-centric visualization interfaces, ensuring the project's objectives are met with efficiency and scalability.

#### Database design

For our database design, we choose MongoDB as the database engine for our project due to its schema-less architecture, which provides the flexibility needed to accommodate the varied and complex data structures of academic papers and other sources:

- Its ability to handle large volumes and diversity of data, coupled with powerful indexing and querying capabilities, makes it well-suited for the real-time, interactive analysis required by the project. 
- MongoDB's document-oriented model aligns naturally with JSON data, streamlining the data ingestion process from different sources.
- The aggregation framework facilitates complex analytical queries, such as identifying clusters and linking patterns within the data. 
- Moreover, MongoDB's scalability ensures the system can grow with the data set, while its robust community support provides a wealth of resources for development and maintenance.

### 3.3 API Framework

In our project, FastAPI framework facilitates a streamlined and efficient communication process between the back-end and front-end. When a request is made by the front-end, such as for uploading an academic paper, FastAPI's routing system directs it to the appropriate handler. The data is automatically validated, processed asynchronously for operations like PDF parsing and data analysis, and then serialized into a JSON response. This response, containing the results of the analysis, is sent back to the front-end where it can be displayed or further utilized. FastAPI's built-in support for asynchronous operations ensures that this process is performed quickly and efficiently, maintaining system responsiveness.

### 3.4 Visualization

Bokeh has been selected as our visualization tool of choice for its ability to generate interactive and dynamic visualizations. This choice is motivated by the need to present complex data analysis results in a manner that is both accessible and engaging for users. And tts focus on interactivity aligns perfectly with our project's goal of making detailed data insights comprehensible and interactive for users.

### 3.5 Data Analysis
Our data analysis process would firstly involve extracting information from our original files in PDF format, doc, docx. Therefore, we have applied the tika-python package, which is a content analysis toolkit that can be used to extract metadata and text content from various document types, including PDFs:

- We utilize tika-python in our project to tackle the challenge of extracting text and metadata from academic papers and articles, which are frequently stored in PDF format. The strength of tika-python lies in its ability to seamlessly parse PDFs, a common format in which scholarly content is distributed and archived. By leveraging tika-python, we can automatically and accurately extract the content of each paper—such as the title, authors, abstract, and body text—regardless of the document's layout complexity. 

- This capability is particularly crucial for our goal of analyzing various sections of a paper, like the introduction and conclusion, to extract keywords and understand the thematic essence using tools like rakun2. Rakun2 is a keyword and keyphrase detection library, an unsupervised algorithm that builds a network of word co-occurrences and uses graph-based metrics to score and rank potential keyphrases. Tika-python's comprehensive parsing capabilities ensure that the information fed into our analysis pipelines is complete and well-structured, thereby enhancing the accuracy and depth of our overall analytical process.

To process document formats such as DOC and DOCX, we would need a tool like python-docx for DOCX files and PyWin32 (or pythoncom on Windows) for DOC files. python-docx allows for the extraction and manipulation of text from DOCX documents in a Pythonic way. For DOC files, which are binary and proprietary, PyWin32 provides a way to interact with Microsoft Word application through COM automation to read and write DOC files.


### 3.6 Testing Libraries

#### Front-end testing

For the unit testing in React, we choose **Jest** as our testing framework for the front-end of the project due to its simplicity, fast execution, and wide adoption in the JavaScript community. Jest is well-suited for projects that require robust testing of React components, which is a common choice for building interactive visualizations and user interfaces in data analysis platforms:

- Its zero-configuration setup allows for a smoother development process, enabling our team to focus on writing meaningful tests from the start. 
- Jest also provides a rich set of features such as snapshot testing, which can be particularly useful for ensuring the accuracy and stability of the UI components over time. With its built-in coverage reports, we can easily track how well our tests are covering the codebase, which is critical for maintaining high-quality code in complex systems. 
- Jest's mocking capabilities are essential for isolating tests and simulating interactions with backend services or databases, ensuring that our front-end behaves as expected under various scenarios.

To effectively conduct unit testing of React components, developers typically use **Jest** as the test runner and **React Testing Library (RTL)** for rendering components and interacting with them in a testing environment. This combination ensures that the tests are maintainable and that the components work as expected from the user's perspective, making Jest and RTL a popular duo in the React development ecosystem for delivering high-quality, reliable front-end code.


#### Back-end testing

We choose **pytest** as the testing framework for the back-end of our project due to its versatility and ease of use in testing Python applications, which is the chosen language for our back-end development. Pytest is known for its simple syntax, which can make tests more readable and maintainable. It supports powerful fixture management and has a rich ecosystem of plugins, which is beneficial for setting up more complex test scenarios that our data analysis system might require.

Pytest also excels at running tests in parallel, reducing test execution time, which is crucial for maintaining a rapid development cycle. Its ability to handle both unit tests and more complex functional testing for APIs and database operations aligns well with our need to test a variety of back-end components, from data ingestion to query processing. The detailed assertion introspection helps in quickly pinpointing issues when tests fail, making debugging more efficient.

### 3.7 Alternatives

Here we would introduce alternatives to our applied technologies:

#### Alternatives for file processing

**Python**, combined with its libraries **Pandas** and **NLTK (Natural Language Toolkit)**, is an excellent choice for file processing in the context of academic paper analysis due to its powerful data manipulation and natural language processing capabilities:

- Pandas provides an intuitive framework for handling and transforming structured data, which is essential for organizing and querying metadata and content from academic papers. 
- NLTK offers a wide range of algorithms and tools for text analysis, including authorship attribution, sentiment analysis, and topic identification, which align with the project's analytical needs. 
- Furthermore, Python's extensive ecosystem includes libraries for accessing various file formats, making data ingest flexible and convenient. Its readability, vast community support, and the ability to integrate with other tools for further analysis or visualization make Python with Pandas and NLTK a robust and versatile alternative for processing academic papers.

#### Alternatives for graph generation

For graph generation, We choose D3.js as an alternative to ECharts due to its unparalleled flexibility and control over the final visualization output. D3.js is a powerful JavaScript library that allows developers to create data-driven documents, enabling the creation of complex, interactive, and highly customizable visualizations that are readily integrated into web interfaces:

- Its strength lies in its ability to manipulate the Document Object Model (DOM) directly, giving fine-grained control over the graphical representation and interactivity, which is essential for displaying the sophisticated and nuanced relationships present in academic paper analysis, such as topic clusters, author linkages, and reference networks. 
- While ECharts provides a simpler and more straightforward approach with pre-built chart options, D3.js's capabilities allow for bespoke visualizations that can be tailored to the specific needs of researchers and analysts in the project, such as incorporating advanced user interactions or integrating with other web-based technologies. 
- This level of customization will enable the system to more effectively convey complex academic and article linkages in a manner that is both intuitive and insightful to the end-user.

### 4. Conclusion

In summary, the language and technology choices for this academic paper text analysis system are driven by specific requirements: We have the FastAPI framework selected as the framework for its high-performance and asynchronous capabilities, which helps build up a responsive front-end; The Bokeh and NetworkX are chosen for their powerful visualization capabilities, enabling the creation of interactive plots and network visualizations to depict relationships and structures within academic paper data; The Tika-Python package is used for data analysis to extract text and metadata from various file formats; Rakun2 is employed for its NLP functionalities to analyze the content of academic papers, facilitating tasks like sentiment analysis, keyword extraction, and topic modeling. Overall, these technology choices collectively contribute to the development of an academic paper text analysis system that can efficiently process, analyze, and visualize textual data, providing valuable insights to researchers and users of the system.
