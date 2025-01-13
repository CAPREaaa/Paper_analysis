# Project and Prototype Evaluation

## Introduction

The purpose of this report is to provide a comprehensive evaluation of the Academic Paper Analysis System project, which aims to develop a comprehensive solution capable of analyzing and visualizing academic papers and other materials. The project team worked together to design, implement, and evaluate a prototype that met client needs and provided valuable insights into the relationships between authors, topics, and papers.

## Group Process Summary and Critique

### Overview of the Group Process

This project chose to follow traditional project management and development processes rather than adopt an agile development model. At the beginning of the project, the team was committed to detailed requirements analysis and system design to ensure that the entire project could proceed smoothly according to the scheduled plan. At this stage, we value communication with customers and try to fully understand their needs and expectations to guide our system design and functional planning.

### Errors in Plan Execution

Although the initial goal of the project plan was to follow the established development plan, during the implementation process, we faced a series of challenges and mistakes:

- **Errors in requirements understanding and assessment**: During the project implementation phase, we gradually discovered that some key requirements and potential technical challenges were not fully captured in the preliminary requirements analysis. This shortcoming in understanding of requirements led to deviations in system design and function implementation, which required adjustments during the development process, affecting the overall progress and quality of the project.

- **Adjustment of development plan**: The originally established development plan failed to accurately foresee the complexity and technical obstacles encountered in actual development, resulting in the need for continuous adjustments to development progress and resource allocation. We found that without adopting agile methodologies, any adjustments to the plan presented significant challenges and costs once project development began.

- **Changes in technical implementation plans**: Especially in the implementation of prototypes, we faced technology selection errors that resulted in the originally planned technical solutions being unable to meet project needs. For example, we originally planned to use bokeh for data visualization. Due to technical limitations and implementation problems, we had to switch to using the echart library. This decision change occurred in the middle and late stages of development, which brought additional workload and Time delays.

- **Team collaboration issues**: Because the continuous communication and collaboration mechanism emphasized in agile development was not adopted, the project team encountered challenges in cooperation and communication. This situation resulted in project schedule delays and unnecessary waste of resources.

## Requirements Fulfillment:

The prototype developed for the paper analysis system successfully fulfills the key requirements outlined in our project description. Here we would take a closer look at how each requirement was addressed:

| Requirement Category | Specific Requirement | How Each Requirement was met |
|----------------------|----------------------|----------------|
| Data Ingestion and Processing Framework | Diverse Input Format Compatibility (DI-FR-01) | The data ingestion module supports various file formats, including PDF, XML, and plain text, ensuring compatibility with a wide range of source materials. |
|  | Metadata Extraction (DI-FR-02) | The ingestion process extracts relevant metadata from the papers, including authorship, publication date, title, keywords, and references, using advanced NLP techniques such as the rakun2 library. |
|  | Data Cleaning and Preprocessing (DI-FR-03) | The data cleaning module employs machine learning algorithms to identify and correct missing values, duplicate data, and inconsistent data types in the ingested papers, ensuring data integrity and readiness for analysis. |
|  | Data Validation and Verification (DI-FR-04) | The post-processing step utilizes regular expressions and custom validation rules to verify the completeness and consistency of extracted text fields, dates, and numbers, guaranteeing data reliability and accuracy. |
| Text Analysis Technology | Authorship Analysis (TA-FR-01) | The system constructs a comprehensive data model that maps the co-authorship networks, allowing researchers to explore collaborations, influential authors, and patterns of scientific collaboration. |
|  | Citation Analysis (TA-FR-02) | Advanced algorithms are employed to build and analyze citation networks, identifying the most frequently cited papers and influential authors, and highlighting their significance and impact within the field. |
|  | Topic Modeling (TA-FR-03) | The prototype incorporates the Latent Dirichlet Allocation (LDA) algorithm to automatically uncover hidden topics and themes within the corpus of academic papers, facilitating the exploration of research trends. |
|  | Sentiment Analysis (TA-FR-04) | State-of-the-art sentiment analysis libraries, such as VADER or TextBlob, are integrated to assess the emotional tone and polarity expressed in the academic papers, providing insights into the sentiment landscape. |
| Data Visualization Interface | Rich Set of Interactive Visualizations (DV-FR-01) | The visualization interface offers a wide range of interactive visualizations, including dynamic network graphs, topic maps, sentiment heatmaps, and time-series charts, enabling researchers to explore and derive insights from the data. |
|  | Intuitive Navigation and Controls (DV-FR-02) | The interface provides a clean and well-organized layout with intuitive controls, such as zoom, pan, filtering, and hovering tooltips, facilitating seamless interaction with the visualizations. |


## Effort Invested

The table below describes the team's efforts in various areas of the project, from requirements gathering to system design, data modeling to back-end development, and front-end implementation to testing.

| Effort Invested | Description |
|-------------|-------------|
| Requirements Gathering | Conducted multiple meetings and discussions with the client to understand needs and expectations<br>Documented requirements thoroughly to ensure clear and shared understanding among stakeholders<br>Collaborated closely with the client to establish a solid foundation for the project |
| System Design | Invested significant effort in architecting a robust and scalable solution<br>Explored and evaluated various technologies, frameworks, and libraries for suitability<br>Created detailed design documents, including data flow diagrams, component interactions, and API specifications<br>Designed a modular and extensible architecture to accommodate future enhancements and additional analysis pipelines |
| Data Modeling | Analyzed diverse data sources and formats for ingestion into the system<br>Researched and experimented with advanced NLP techniques for accurate information extraction<br>Implemented sophisticated data cleaning and preprocessing mechanisms to ensure data quality and consistency<br>Designed an efficient and optimized data model to support analysis queries and fast information retrieval |
| Backend Development | Dedicated substantial effort to building the core components of the system<br>Delved into the intricacies of authorship analysis, sentiment analysis, topic modeling, and other relevant techniques<br>Researched and implemented state-of-the-art algorithms and libraries for accurate and meaningful results<br>Optimized the performance of analysis components to handle large volumes of data efficiently<br> Conducted rigorous testing and fine-tuning to ensure reliability and effectiveness of analysis results |
| Frontend Implementation | Invested significant effort in creating an intuitive and visually appealing user interface<br>Collaborated with the client to understand their preferences and designed a user-friendly interface<br>Implemented a flexible and powerful query layer to support a wide range of analysis queries<br> Optimized the query processing engine for near-real-time results and efficient handling of complex queries<br>Developed a comprehensive data visualization system using popular libraries and frameworks |


## Team Performance

During the requirements gathering phase:

- Our team actively engages with our customers, conducting multiple meetings and discussions to gain a deep understanding of their needs and expectations.
- We asked relevant questions, clarified uncertainties, and carefully documented requirements.
- This collaborative approach ensures the team has a clear and shared understanding of the project scope, laying a solid foundation for subsequent phases.

As the project progresses, our team maintains a positive and supportive team dynamic:

- We foster an environment of open communication where everyone is encouraged to share their ideas, concerns and suggestions.
- Regular stand-ups and progress updates keep the team aligned and informed, allowing them to address any challenges or roadblocks in a timely manner.

Throughout the development process, our team demonstrated keen attention to detail:

- We adhere to coding best practices, maintain clean and well-documented code, and follow established design patterns and architecture.
- Our team conducts regular code reviews and provides each other with constructive feedback, promoting continuous improvement and maintaining high standards of code quality.

When faced with technical challenges and uncertainty:

- Our teams proactively find solutions and leverage their collective knowledge and expertise.
- We conducted research, explored alternatives, and made informed decisions based on project requirements and constraints.
- Our team’s problem-solving skills and adaptability are reflected in their ability to overcome obstacles and find effective solutions.


## Prototype Performance

Our academic paper analysis system prototype showed good performance during the development process and achieved the set goals.

### 1.User interface and data visualization
- **User Interface**: We designed an intuitive and easy-to-use user interface to enable researchers and analysts to easily conduct complex queries through the system and effectively visualize the results. Responsive design principles were adopted to ensure the accessibility and functionality of the prototype on different devices and screen sizes.
- **Data Visualization**: The team leverages popular libraries and frameworks to create interactive and information-rich visualization components such as charts, graphs, and network diagrams. These visualizations enhance the user experience and make it easy for users to understand and explore the data.

### 2.User feedback and continuous improvement
- **User Testing and Feedback**: Through user testing, we actively solicited feedback from potential users and gathered insights about the usability, functionality, and overall effectiveness of the prototype. Feedback received has been generally positive, with users praising the prototype’s intuitive interface, powerful analytical capabilities and visually stunning visualizations.
- **User-centered design**: Throughout the development process, we remained focused on user-centered design and continually refined and enhanced the prototype based on feedback. We are committed to delivering a high-quality solution that meets the needs and expectations of our target users.

## Learnable Experience

The development of the academic paper analysis system prototype provides a wealth of valuable lessons and insights for our team. These lessons span various aspects of the project, from requirements gathering to agile development, communication and collaboration, continuous improvement, and user-centered design. By reflecting on these lessons, our team can enhance their future projects and deliver even more successful outcomes based on what we have learned shown in the table below:


| Lesson Learned | Description |
|----------------|-------------|
| Importance of Clear and Detailed Requirements | - Investing time and effort in gathering comprehensive requirements sets a solid foundation for success<br>- Actively listening, asking clarifying questions, and documenting requirements meticulously<br>- Establishing a shared understanding among all stakeholders<br>- Requirements serve as a roadmap, providing direction and focus throughout the project<br>- Regularly reviewing and refining requirements based on feedback and changing needs |
| Benefits of Agile Development | - Breaking down the project into smaller, manageable sprints<br>- Delivering incremental value to stakeholders<br>- Prioritizing features, addressing changing requirements, and incorporating feedback effectively<br>- Fostering a collaborative environment with close stakeholder involvement<br>- Gathering valuable insights, validating assumptions, and making necessary adjustments<br>- Adaptability and flexibility in embracing change for continuous improvement |
| Effective Communication and Collaboration | - Open and transparent communication within the team and with stakeholders<br>- Regular team meetings, stand-ups, and status updates for alignment and accountability<br>- Using collaborative tools and platforms for seamless information sharing<br>- Leveraging project management software, version control systems, and documentation repositories<br>- Active listening, empathy, and constructive feedback in fostering effective collaboration<br>- Promoting a supportive and inclusive team dynamic to leverage individual strengths |
| Continuous Improvement and Learning | - Embracing a mindset of continuous improvement and learning<br>- Actively seeking feedback, conducting retrospectives, and reflecting on processes and practices<br>- Encouraging knowledge sharing and collective learning through code reviews, pair programming, and technical discussions<br>- Fostering a learning-oriented environment for continuous upskilling and staying updated with industry practices<br>- Viewing failures as learning opportunities and conducting thorough postmortems and root cause analyses<br>- Implementing corrective measures and preventing similar challenges in future projects |
| Importance of User-Centered Design | - Prioritizing user experience and usability throughout the development process<br>- Actively seeking user feedback and involvement at various stages of the project<br>- Conducting user interviews, usability testing sessions, and demonstrations<br>- Identifying pain points, understanding user preferences, and iterating based on real user feedback<br>- Adopting an empathetic approach by considering user goals, workflows, and challenges<br>- Designing intuitive interfaces, streamlining user interactions, and creating a seamless user experience<br>- Incorporating accessibility best practices and considering diverse user needs<br>- Ensuring the prototype is usable and beneficial to a broad audience |

The table above highlights the key lessons learned by the team during the development of the academic paper analysis system prototype. These lessons encompass various aspects of the project and provide valuable insights for future endeavors.


## Conclusion

In summary, the academic paper analysis system project successfully delivered a prototype that met customer needs and provided a powerful tool for academic paper analysis and visualization. But we still have areas that need to be further enhanced and improved to a large extent, such as how to manage the entire development process, how to design development plans and task arrangements. The lessons learned from this project will be invaluable to our team as we ourselves embark on future efforts to continuously improve their processes, skills and capabilities to deliver high-quality solutions that meet our customers' needs.