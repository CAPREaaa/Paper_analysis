## 1. Project Introduction

In this chapter, this document mainly presents the background of this project from a macro perspective, as well as the general system functional goals that need to be completed. Specific detailed descriptions will be shown in the following two chapters.

### 1.1 Project Background

The project plans to build a text analysis system designed to automatically process and analyse academic papers. It can not only understand text, but also explore deep connections between papers, such as citation relationships between papers, collaboration links between authors, etc.

This system can present complex information clearly, help you see the connections between different documents, understand the development of different viewpoints, and even visually display this information. Through this system, each paper is no longer a boring text, but makes academic research more intuitive and easier to explore.

### 1.2 Project Objectives

This part is a general description of the entire project goals and the macro-level functional module requirements. It is mainly divided into the following three parts.

#### 1.2.1 Build Data Processing Framework

We intend to create a framework that can read and preprocess data. The core of this framework is the ability to process all kinds of data quickly and accurately. Simply put, it can quickly organise data, turn messy information into order, and lay a solid foundation for the next step of analysis or further processing.

During this process, we place special emphasis on data accuracy to ensure that there are no errors in every step. Because data accuracy is critical to decision-making, any tiny error can lead to huge losses. So this data processing framework can not only greatly improve your work efficiency, but also save valuable time and resources and obtain key insights and information.

Among other things, we value efficiency. Just imagine, when your team grows from 100 to 20,000 people, the amount of data grows from tens of thousands to millions. If the systems that process data are slow and inaccurate, every small error can be magnified, ultimately affecting the decision-making and efficiency of the entire team. But with our powerful framework, no matter how big the data is, it can be processed quickly and accurately.

#### 1.2.2 Use Text Analysis Techniques

This project processes and analyses data through text analysis techniques. Specifically, we will use some technical tools, such as natural language processing (NLP) technology, to deeply dig into and understand the key information in the paper, such as keywords and core arguments, as well as the hidden connections and logical relationships between the papers, such as paper citation relationships, author cooperation relationships, etc. In this way, we hope to quickly grasp the relevant information of the paper, thereby helping users gain valuable insights.

Through the analysis and organisation of this part of the system, this not only saves your time in collecting and analysing information, but also allows you to quickly understand industry trends. Make complex information clear and easy to understand, so you can make smart, data-based decisions faster.

#### 1.2.3 Develop Data Visualisation Interfaces

Another core goal of this project is to create a data visualisation interface that is not only intuitive but also human-computer interactive, which means that the results of data analysis can not only be viewed and understood directly in the form of charts, relationship network and diagrams, but also allow users to conduct in-depth exploration through operating charts, network diagrams, etc.

This interface is designed to make data not only intuitive but also actionable, which allows users to discover patterns, trends and deeper meanings in the data through interaction regardless of technical background. For example, you can not only see the graphical display of the data, but also explore different details by clicking, dragging or zooming, making the exploration of the data more vivid and interesting.

## 2.Requirements Specification

For all the specific requirements analysis and discussions about this project, we decided to use the MoSCoW classification method to classify and prioritise the various requirements proposed.

- **M**: Must Have

- **S**: Should Have

- **C**:Could Have

- **W**:Will not Have(At this time)

(***MoSCoW*** method sourced from [​​https://en.wikipedia.org/wiki/MoSCoW_method](https://en.wikipedia.org/wiki/MoSCoW_method) )

(***Client questions*** are from [https://docs.google.com/document/d/1ERVzX0HNkWyTxY1Ju69_zIKmJga5KzyY4uM3DQTU_JM/edit](https://docs.google.com/document/d/1ERVzX0HNkWyTxY1Ju69_zIKmJga5KzyY4uM3DQTU_JM/edit) )

### 2.1 Functional Requirements

In this part of the document, the three main functional modules mentioned in the previous chapter will be introduced and described in detail, and more detailed requirements will be proposed for each functional module.

#### 2.1.1 Data Ingestion

The data ingestion module will be the foundation of the system, responsible for collecting and processing data from the source. Specific needs may include:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| DI-FR-01 | Data reading capabilities | The framework should be able to extract authors, publication date, title, citations, and keywords from a given PDF or link. | Client-Question 5 | M | NULL |
| DI-FR-02 | Preprocessing capabilities | The system must handle missing values, duplicate data, and incorrect data types from ingested papers (DI-FR-01). | Course Assessment Description-2.Project Description | M | DI-FR-01 |
| DI-FR-03 | Data verification | Check that the extracted text (DI-FR-01) fields are complete, dates and numbers are in a consistent format, and reference links are accessible. And check whether the extracted text data is consistent with the source file. | Course Assessment Description-2.Project Description | M | DI-FR-01<br>DI-FR-02

#### 2.1.2 Data Analysis

The data analysis module is the core of the system and is responsible for in-depth analysis and processing of ingested data. More specifically, there are the following main requirements:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| DA-FR-01 | Feature extraction | The system must extract word frequencies (TF-IDF), n-gram models, word embeddings (such as Word2Vec or BERT).  | Client | M | NULL |
| DA-FR-02 | Author relationship analysis | Create a data model that maps the relationship between each paper and its authors and a co-author network. | Course Assessment Description-2.Project Description | M | DA-FR-01 |
| DA-FR-03 | Paper citation analysis | Analyse the citation relationship between papers to identify the most frequently cited papers and core authors. | Project Description | S | DA-FR-01 |
| DA-FR-04 | Topic cluster analysis | Group documents based on keywords. | Client-Question 7 | M | DA-FR–01
 |
| DA-FR-05 | Emotion analysis | The system should be able to analyse positive/negative sentiment in the literature. | Client-Question 10 | C | DA-FR-01 |
| DA-FR-06 | Retraction paper analysis | Mark papers as withdrawn or published. | Client-Question 9 | C | DA-FR-01<br>DA-FR-02

#### 2.1.3 Data Visualization

The design of the data visualisation module focuses on user experience and aims to clearly present complex data analysis results through intuitive graphics and charts.The main requirements for refinement include:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| DV-FR-01 | Intuitive navigation structure | Design clear menus and navigation elements to ensure users can easily find and access the following data: authors, titles(DI-FR-01). | Client | M | NULL |
| DV-FR-02 | Diverse data visualisation components | Provide data visualisation charts, such as network relationship diagrams and line charts, to adapt to different types of data display needs. | Client-Question 4 | M | DV-FR-01
| DV-FR-03 | Interactive interface | Make sure charts and graphs are interactive, for example, allowing users to zoom in/out, filter data, or view details of specific data(DI-FR-01). | Client-Question 4 | M | DV-FR-01<br>DV-FR-02
| DV-FR-04 | Compatible design | Ensure that the interactive functions of the user interface can be used normally on different devices (such as tablets and mobile phones), and that charts can be displayed normally, making it convenient for users to use it in different physical environments such as home or office. | Client-Question 2 | C | NULL |

### 2.2 Non-Functional Requirements

In this part, this document mainly focuses on the analysis and detailed description of the non-functional requirements of the system, and is mainly divided into the following four parts.

#### 2.2.1 Performance Requirements

Performance requirements focus on how quickly the system can process data and respond to user actions. Specifically, the performance requirements for this system should include the following aspects:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| PR-NFR-01 | User support performance | The system should be able to respond to users within 5 seconds. | Client-Question 1 | S | NULL |
| PR-NFR-02 | Interactive visualisation capabilities | When a user queries an interactive diagram or network diagram, the system needs to respond to the user within five seconds. | Client-Question 5 | S | NULL |
| PR-NFR-03 | Data accuracy  | It is necessary to correctly extract key basic information such as the author and keywords of the article, and the accuracy of the results of word frequency analysis, author relationship analysis, and paper citation analysis must be at least 99% | Client-Question 5 | S | NULL |
| PR-NFR-04 | Performance optimisation  | Use multi-threading or multi-process technology to parallelize the execution of data extraction tasks (DI-FR-01) so ​​that multiple operations can be performed simultaneously. | Group decision | S | DI-FR-01
 |

#### 2.2.2 Feasibility Requirements

System feasibility requirements mainly focus on the operability of the system for users, mainly including:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| AR-NFR-01 | Operational feasibility | The user interface should be easy for users to query author relationships, article citation relationships and article sentiment analysis results, and also should be easy to interact(DV-FR-03) regardless of their technical background. | Client | S | NULL |
| AR-NFR-02 | Documents support | The system should provide detailed user manuals and online help documents. | Group decision | C | NULL |

#### 2.2.3 Maintainability Requirements

Maintainability requirements require that systems be easy to update and repair. Specific requirements include:

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| MR-NFR-01 | Modular design | The system should adopt a modular architecture design, which divides a system into a series of independent, exchangeable modules, each module implements part of the system's functions, and each module has a clearly defined interface through which it communicates with other modules. | Group decision | M | NULL |
| MR-NFR-02 | Well documented | Maintain comprehensive documentation of the system, including code documentation, architecture diagrams, API documentation, and user manuals. | https://uxbooth.com/articles/build-better-requirements-documentation-why-who-and-how/ | S | NULL |
| MR-NFR-03 | Data backup  | The entire GitLab project code base, all related data sets, project documents, and virtual machine snapshots should be backed up regularly. The backup will be in compressed format to save storage space and stored in third-party cloud storage services (such as Amazon S3, Google Cloud Storage or Microsoft Azure Storage) to ensure data security and reliability. | https://www.techtarget.com/searchdatabackup/tip/Top-3-backup-and-recovery-requirements-for-data-protection | S | NULL |
| MR-NFR-04 | User feedback mechanism | Allow users to report bugs or suggestions. | Group decision | C | NULL |

#### 2.2.4 Scalability Requirements

| ID | Name | Description | Source | Priority | Dependency |
|---|---|---|---|---|---|
| SR-NFR-01 | User scalability | The system should support the variation of users up to 2,000. | Client-Question 1 | M | NULL |
| SR-NFR-02 | Data processing scalability | The system should be able to ingest millions of papers. Therefore, when a user applies to process or analyse a new article, the system will have a task queue to process it in order, such as first come, first served or according to a certain priority. | Client-Question 1&3 | M | NULL |
| SR-NFR-03 | Compatibility scalability | The system can access resources of third-party services, such as cloud storage and computing services (Amazon Web Services), data visualisation tools (Tableau Public API or D3.js library), and natural language processing services (Google Cloud Natural Language) | Group decision | S | NULL |

## 3. Risk Management

### 3.1 Risk Identification

At the beginning of a project, team members need to work together to identify potential risks that may impact project schedule, cost, quality, and customer satisfaction. For example:

- **Technical risks**: such as difficulties in technology adoption, technical compatibility issues, data processing or storage issues.

- **Project management risks**: such as improper timing, insufficient resource allocation, and poor communication.

### 3.2 Risk Assessment

For each risk identified, its likelihood and impact need to be assessed to determine risk priority. Perhaps this can be done through a combination of qualitative analysis (such as a risk matrix) and quantitative analysis (such as probability).

### 3.3 Risk Resolution

Based on the results of the risk assessment, we need to find some resolutions for each risk. For example:

- **Technical risks:** Can be mitigated by adopting mature technologies, such as conducting simulated data verification. 

- **Project management risks**: Can be mitigated by improving project planning, enhancing team communication, or introducing professional project management tools.

### 3.4 Risk Control

A continuous risk monitoring and control mechanism needs to be established to ensure the effective implementation of the risk management plan and timely response to emerging risks. This can be monitored through regular risk assessments at meetings.

## 4. Team and Communication

### 4.1 Team role assignment

- **Technical Lead (Kate)**: Responsible for the development of the project.

- **Requirements Analyst (Yuyang)**: Responsible for the requirements analysis of the project, writing relevant documents, and carrying out system development and design work.

- **Infrastructure & technology choices(Kaijie)**: Responsible for making decisions on the tools, processes, and environments for the project.

- **Design (Yifan)**: Responsible for design of the system according to project requirements.

### 4.2 Communication

Effective communication is key to teamwork and project success. The communication plan should include the following areas:

- **Communication Purpose and Frequency**: Be clear about the purpose of each communication, such as project progress updates, problem discussions, or decision making, and the frequency of communication, such as weekly team meetings.

- **Communication Channels and Tools**: Choose communication channels and tools that are appropriate for the team, such as email, messaging tools (such as Teams), project management software (such as Kanban Board), or video conferencing tools (such as Zoom or Microsoft Teams).

- **Information recording and sharing**: Ensure that all important communication content, such as meeting minutes and decision-making documents, are properly recorded and archived, and made visible and accessible to all team members through the team sharing platform.

- **Team Building and Conflict Resolution**: Encourage positive interaction and collaboration among team members, and promptly identify and resolve conflicts and problems within the team.

## 5 Quality Assurance

### 5.1 Testing Methods

In order to ensure that the final system can be completed as scheduled and run normally, we need to test it during the development process. The testing methods needs to be comprehensive:

- **Unit testing**: Focus on verifying that every smallest unit of code works as expected. This usually involves testing a single function, method or class.

    - Developers write test cases to test various aspects of the code, including boundary conditions and exception handling.

    - Ensure that every part of the code executes correctly in an isolated environment to exclude dependencies on other components.

- **Integration testing**: Check the behaviour of different modules or services when working together to make sure they work together as a whole.

    - Test the interfaces between different modules to ensure accurate data transmission.

    - Identify problems that may arise during module integration, such as data format errors or communication errors.

    - Verify whether the integrated system meets the predetermined business processes.

- **End-to-end testing**: Simulate actual user scenarios, starting from the user interface and executing actions through the entire system.

    - Verify that the user interface responds to user input as expected.

    - Ensure data is passed correctly between various parts of the system without errors.

    - Test key business processes such as data processing, analysis, result generation and presentation.

    - Check system performance on different devices and browsers to ensure compatibility.

- **System Testing**: Comprehensive testing of the entire complete system to verify that the system meets all business requirements and technical specifications.

    - Test system functionality to ensure all user requirements are met.

    - Conduct compatibility testing to ensure the system can run properly in different environments and configurations.

### 5.2 Test Tools

Choosing the right testing tool is crucial to improving testing efficiency and ensuring accuracy for repetitive tasks. For this project, the following is a description of some commonly used automated testing frameworks:

- **unittest**: A testing framework in the Python standard library, inspired by JUnit, that supports automated testing, shared test code, and collections of test sets. 

    - ***Accuracy***: By writing test cases and assertions, unittest helps developers ensure that every part of the code works as expected, enhancing the accuracy of testing.

    - ***Organisation***: Supports test organisation into independent test cases and test suites, making the testing process more structured and manageable.

    - ***Extensibility***: Provides a variety of test devices, including pre-test preparation (setUp) and post-test cleanup (tearDown), etc., to facilitate the configuration of the test environment and the release of resources.

- **pytest**: A very popular third-party testing framework known for its simple syntax and powerful feature set, suitable for Python projects of all sizes.

   - ***Accuracy***: Supports rich assertion syntax, making test results easier to write and understand, thereby improving test accuracy.

   - ***Flexibility***: It has a high degree of flexibility, can easily adapt to different testing needs and environments, and supports parameterized testing and plug-in expansion.

   - ***Detailed Report***: Provides detailed test reports and exception information to help developers quickly locate problems.

(***unittest*** sourced from [https://docs.python.org/3/library/unittest.html ](https://docs.python.org/3/library/unittest.html))

(***pytest*** sourced from [https://docs.pytest.org/en/8.0.x/](https://docs.pytest.org/en/8.0.x/))

## 6. Documentation and Resources

### 6.1 Project Documentation

Keep updating of project documentation is critical to the success of the project. All documentation should be accurate, up-to-date and easily accessible. This includes but is not limited to the following aspects:

- **Design Document**: Detailed description of the system's architecture, components and interfaces, including the design principles and implementation details of the system modules.

- **Requirements Document**: Clearly describe the functional and non-functional requirements of the product, providing clear guidance to the development team.

- **User Manual**: Provides end users with system usage instructions, including system installation, configuration, daily use and troubleshooting.

Documentation should be kept in an easily accessible location and updated regularly to reflect the latest project status..

### 6.2 Resource Repository

In this project, the establishment and maintenance of the resource library is a key link to ensure smooth team collaboration and effective sharing of knowledge. The resource library will serve as a central distribution centre for all important resources of the project, ranging from code libraries, data sets, test scripts to other auxiliary resources such as configuration files, deployment scripts and various tools and libraries.

Among them, the code base not only stores all source code and related libraries, but also provides a stable and reliable development environment for team members by supporting version control and collaborative development.

Datasets include sample data, test data or simulated data to provide support for development and testing. The test script part includes automated test scripts and test cases, which are crucial to ensuring the quality and stability of the product.

Other resources, such as configuration files, deployment scripts, and different tools and libraries, ensure the smooth development and operation of the project.
