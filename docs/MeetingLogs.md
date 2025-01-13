## Meeting 1 - 3/10/23
**Questions**
*What*
1. What is the use case? How would researchers use the provided visualisations and data?
2. What do you mean by data store? is it as described here? "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview"
3. What are the expected outputs? and in what formats?
4. What is meant by "analytics-ready form"?
*How*
1. How are researchers expected to interact with the program? Is it expected for the program to be run locally or as a remote application (web?)

**Tasks to do until next meetings**
Get prototype working individually
Play around with prototype
Send email with questions

**Tasks for next meetings**
- Set gitlab branches for report, formative, graded, and meetings
- Setup kanban board on gitlab
- Decide on quality assurance methodology (how are we going to ensure quality?)
- Discuss answers from email
- Decide on requirements (MoSCoW)

**Things decided**
- Use Latex for report
- Use markdown for documantion 

https://www.bibtex.com/
https://www.productplan.com/glossary/moscow-prioritization/


## Meeting 2 - 5/10/2023
**Requirements**
1. Come up with possible outputs and ideas. Run those by the client. - For next meeting
2. Come up with high level requirements - For next meeting
3. Ask for further detail on high level requirements - Todo next meeting
4. Send 3 ideas and questions on discord each person.  - For next meeting

**Collaborations**
- Kanban board has been setup
- Issue board with link to gitlab has been set up

**Formative assessment**
1. Get prototype working - For next meeting
2. Document issues with installing prototype individually - For next meeting
3. Explore prototype individually and log issues - For next meeting
4. Team code review (design aspect) for the prototype - Todo in next meeting


## Meeting 3
Teams
**Project mangament**
Kate (main)
Yifan (reserve)

**Backend**
Kate (main)
Casper (main)
Yifan (reserve)

**Frontend**
Cagy (main)
Yifan (main)
Casper (reserve)

**For next Meeting**
Requirements
https://docs.google.com/document/d/1H61U-ibzeq-wlwrKMg_5jgb-EUMH8LB638ssKR2mFNo/edit?usp=sharing
use https://en.wikipedia.org/wiki/MoSCoW_method
 work alone on the same file, that way there is no overlap
1. Read main document, extract requirements.
2. Write questions for clearifying any uncertainties. - send in ⁠requirements
3. Write into the google doc, use MoSCoW.



Backend - Typescript - maybe as a library?
1. Upload papers from local drive
2. Extract general information such as title and main keywords from papers
3. Start infrastructure - GitHub, gitlab,  or netlify
Frontend - React
1. init the project
2. decide on decision language (give a few a try)
3. Build in a modular way

## Meeting 4
Very basic prototype for next week
Restructured and clarified what needs to be worked on.

**Backend**
Stack is decided as python, pandas, mat-plot lib,  and mongodb.
(maybe use docker/podman?)

**Frontend**
React, MUI.

## Client Meeting
Attendes :
All Members + Client

**Objectives and requirements**
The requirements have the objectives but not why we have them.
1. why do we care about these advanced techniques what would they give me?
2. "this what we think what we need"
3. "why do we care, is it gonna make my life easier, is it gonna help me do my job"

Give meaning to terms.
Accuracy should be one of the top. Can be split to two "efficient pipelines", "data visualisation"
Overall this is a good start. Just need to reword. "Benefit, how?".
People want to know how. Make the reader want to read it.
Don't use "advanced" or other flowery language.

Give each requirement an id and prioritisation. 
Structure:

id = <number> < Functional | Non Functional >
Name (short) = "the system must read format x"
Description
Source = "where did you get the requirement"
Priority  = Must - MosCow
Dependencies = "does this depend on other requirements?"

"The system must extract text" - Don't lock yourself into a technology!
"quickly" - what does this mean?

Give a reasonable performance metric!
Manage user exceptions, do not make technically infeasible 
"scaleable" - extendable or able to work with dynamically changing user count

Write the requirements in such a way that is unambiguous!
Don't worry about getting it perfect, make it good enough.
Good enough is that it satisfies the users requirement as you understand them.
We dont have much time so dont focus on perfect. 

https://docs.google.com/document/d/1ERVzX0HNkWyTxY1Ju69_zIKmJga5KzyY4uM3DQTU_JM/edit?usp=sharing


## Meeting 5
**Attending**
Kate
Kaijie
Casper

**Requirements document**
Missing source and FR/NFR in the id.
Requirements are still a bit vague.
Requirements from the client meetings are missing.


**Tasks**
- Finish requirements - by monday. - Casper
- Ingest and visualise data - by monday. - Kate
- Work on design document - Finish by friday the 16th. - Yifan
- Infrastructure & choices - Finish by friday the 16th. - Kaijie
- Reconstruct  repo - Kate

**Presentation**
- Product status  -  Each person.
- Product Presentation - Kate
- Project management - Kaijie