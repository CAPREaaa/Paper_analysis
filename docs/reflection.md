[toc]

## Usability Analysis


The paper analysis application presents a blend of strengths that significantly enhance user experience, yet it also reveals a critical area for improvement that, if addressed, could substantially elevate overall usability.

One of the application's foremost advantages is its interactive graph feature. This functionality not only enriches user engagement by allowing users to interact directly with the data through selection, and drag & drop actions, but it also facilitates an in-depth exploration and understanding of complex academic relationships. The ability to manipulate the graph dynamically and access detailed information on demand provides a highly effective tool for visualizing the intricate connections within academic literature, catering well to the needs of researchers and academics.

Furthermore, the back-end's capability to process files and identify key information within a mere 1.5 seconds stands out as a significant achievement. This efficiency is crucial for maintaining a seamless user experience, particularly when users are navigating through or uploading a moderate amount of data. The prompt processing ensures that users can quickly derive insights from their data, enhancing the application's utility and responsiveness.

The application also boasts a commendable user interface (UI) design. Aesthetics and functionality are crucial components of usability, and a well-designed UI supports user navigation and interaction with the application's features. Described as "decent," the UI likely provides a level of clarity and ease of use that contributes positively to the overall user experience, helping users accomplish their tasks with minimal confusion or frustration.

However, the application faces a notable challenge in performance, particularly when handling papers with a large number of citations. Users experiencing significant delays under these conditions might find the tool less effective for their research needs. Such performance issues can detract from the user experience, especially for those working with extensively cited documents, which are common in academic research. Addressing this issue is crucial for ensuring the application remains a valuable resource for all users, regardless of the citation volume of the papers they are analyzing.

In summary, the paper analysis application demonstrates strong potential through its interactive graphs, rapid processing capabilities, and user-friendly design. However, optimizing performance for documents with a large number of citations represents a critical area for improvement. Enhancing this aspect of the application could significantly improve its usability, making it an even more powerful and reliable tool for the academic community. By addressing this challenge, the application can better meet the diverse needs of its users, ensuring a consistently positive experience across a wide range of research tasks.





## Reflection on development


Reflecting on the development process of our paper analysis application reveals a journey filled with strategic decisions, technological pivots, and challenges that shaped the project's trajectory. The evolution of our technology stack, design choices, and development methodologies highlights the dynamic nature of software engineering and the need for adaptability in the face of unforeseen hurdles.


### Technology Choices and Design Decisions

Our decision to transition from Bokeh to ECharts for graph visualization was a significant pivot, driven by the technical challenges encountered when attempting to integrate Bokeh's visualizations within a Next.js environment. This decision highlighted the necessity of aligning our technology stack with the architectural demands of our project. ECharts offered a more seamless integration with Next.js, enabling us to implement dynamic and interactive graphs that were central to our application's functionality. This shift not only resolved the synchronization issues we faced but also improved the overall performance and user experience of our application.

Choosing Next.js over Vue for our frontend development was another crucial decision influenced by the collective familiarity and experience of our team with React and its ecosystem. This strategic choice underscored the importance of leveraging existing skills within the team to accelerate development and reduce the ramp-up time typically associated with learning new frameworks. The benefits of this decision were manifold, including faster iteration cycles, improved team collaboration, and a more cohesive development process, ultimately contributing to a more polished and reliable product.

The consideration of Storybook as a tool for building and testing UI components in isolation was motivated by its potential to streamline our UI development and ensure consistency across the application. However, the realities of project timelines and competing priorities necessitated a difficult decision to deprioritize its integration. This experience underscored the challenges of balancing ideal development practices with the practical constraints of project deadlines and resource availability. It also highlighted the necessity of flexible project management practices capable of adapting to changing circumstances without compromising the project's core objectives.

Our journey was characterized by a continuous process of evaluation and adaptation, not only in terms of technology choices but also in design decisions and development methodologies. 

### Challenges and Adaptations

One pervasive challenge was managing resource allocation effectively in the face of scope creep. As the project progressed, new features and tasks emerged that were initially outside the planned scope. This expansion of scope required a constant reassessment of priorities and resources, often leading to difficult decisions about what could realistically be achieved within the timeframes and with the manpower available. Balancing ambitious development goals with practical project constraints was a continual process of negotiation and adjustment.

As we integrated various technologies and libraries into our stack, we encountered compatibility and integration issues that required us to delve into extensive troubleshooting and research. These complexities often stemmed from version incompatibilities or unexpected behavior when different technologies interacted. Navigating these integration challenges necessitated a deep dive into documentation, community forums, and sometimes direct communication with library maintainers to find workable solutions.


The project also highlighted the challenges associated with remote collaboration, particularly in terms of communication and coordination among team members. Ensuring that all team members were aligned on project goals, tasks, and timelines required extra effort and the adoption of collaboration tools and practices. Overcoming the hurdles of remote work, such as timezone differences and communication lags, was critical for maintaining project momentum and team cohesion.

These challenges and adaptations underscore the reality that software development is a complex and dynamic process, fraught with unexpected twists and turns. The ability to navigate these challenges through strategic decision-making, effective communication, and a willingness to adapt became cornerstones of our project's eventual success. Reflecting on these experiences provides valuable lessons in resilience, flexibility, and the importance of a user-centered approach to development, lessons that will inform our future projects and contribute to our growth as software developers.



### Reflections and Learnings
Reflecting on the entire journey of developing the paper analysis application, several key learnings emerge, transcending the realm of technical specifics and delving into the essence of teamwork, adaptability, and the pursuit of excellence in software development.

Perhaps one of the most profound insights from this project is the importance of being flexible and adaptable. The ability to pivot when faced with unforeseen challenges or when initial plans don’t pan out as expected is invaluable. It’s akin to navigating a river; while you may set out with a clear destination in mind, the currents may shift, necessitating a change in direction. Embracing these changes rather than resisting them can lead to unexpected discoveries and innovations.

The development process underscored the critical role of effective teamwork and the collective strength that arises from diverse skills and perspectives. Like a symphony orchestra, where the harmonious interplay of different instruments creates a masterpiece, our project benefited from the unique contributions of each team member. This experience highlighted the importance of clear communication, mutual respect, and a shared vision in amplifying our collective potential.

The challenges of scope creep and deadline pressures brought to light the art of prioritization and time management. Deciding what features were essential and what could wait was a continual balancing act, reminiscent of juggling multiple balls in the air. Learning to prioritize effectively, not just in terms of project tasks but also in balancing our project with other responsibilities, was a vital skill honed during this process.

The journey through the development of this application was a lesson in navigating uncertainty. Just as in life, where we often face unforeseen circumstances, this project taught us to remain steadfast in the face of ambiguity, making informed decisions with the information available and being prepared to adjust as more information came to light.

In essence, the development of the paper analysis application was more than a technical endeavor; it was a journey of personal and collective growth. It taught us the value of flexibility, the strength found in teamwork, the importance of learning from feedback and mistakes, and the art of prioritization and navigating uncertainty. These lessons, learned at the coalface of software development, extend far beyond the confines of this project, offering invaluable insights for both our professional and personal lives.

