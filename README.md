# Tamarin
A tool to help different audiences understand and improve software development.

The tool needs to users to **introduce themselves** and their roles:
* Stakeholder
* Product owner
* Scrum master
* Developer (front end)
* Developer (back end)
* Tester
* Ux designer
* Sales
* Trainer

Mainly tamarin will be there to answer questions for all the people involved. tamarin will be about
breaking down abstracts of abstracts of abstracts (etc) with acceptance criteria be inherited and 
time estimates being split and changing it parent estimate, which will all be logged over time. 

The Stakeholder/ product owner who's really responsible for **return on investment** will want to know:

* When will it be done?
* Why is it late?
* What features will it have?
* What has been estimated wrong?
* What was hard?
* Historically how did the estimates change (a graph)

**Scrum master wants know**

* Any blockers (hidden - as in been on a task of a long time or declared)
* How the sprint is going (Are we gonna hit the sprint goal before the end of the sprint, how's the quality)

**Key terms**

Project = Epic, features, stories, technical debt story, technical infrastructure, definition of done

**Task completed or is it....**

But has it been code reviewed, (the reviewer telling the author how it works), tested, deployed, documented (for all audiences), 
reviewed by the product owner (put on their work list), load tested? (technical debt if not done now), 
security audit (technical debt if not done now)

**Devs**

Will be asked a few quick questions every morning or time they log in: "Is blar complete?", "How much is left (%)?", "Declare a blocker?". They should log on before they are about to start work and keep logged in as they work, this will be used to time tasks.

**Dogfood**

This project should be developed using itself. Also should be data driven: First design data in and out. Then write the tests, in parallel with the UI design. One page at a time from start to finish. 

**Tech**

Angular2, material design and Go backend (?) with mongo couch or postgres db (?)

**Features**

Using git log, could track where bugs appear, could cost a project based on stake holder value and time of project. Code coverage warnings, code review warnings, benchmark warnings, security and linting warnings.

**Architecture**
Can rsjx subscribe to an rss feed, perhaps the architecture should be sub/pub model for all state that is being displayed. As githubs gives out atom feeds like: https://github.com/hss-dev/ngQuill/commits/master.atom
