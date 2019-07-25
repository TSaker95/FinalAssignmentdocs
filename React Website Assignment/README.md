# Hillsdon Grocer MERN app

## The app
Live link to published app:
https://hillsdongrocer.herokuapp.com/

Source code repo:
https://github.com/TSaker95/Grocer-React-Website

Documentation repo:
https://github.com/TSaker95/FinalAssignmentdocs

## Description
    
### Problem definition / purpose:

Hillsdon Grocer currently has a simple, static website. While this fulfills most of their needs, they would like something more dynamic allowing them to better publicise products on sale. Ideally, they would like to be able to fill out a title, description and sale price and have it automatically displayed on their website.


### Functionality / features

Our solution to this is to create a login portal which then leads them to a dashboard showing current specials as well as ways to create, edit and delete specials. Once saved the current specials will be rendered on the homepage of their website within a specials section.

The dashboard it broken into two sections, products and specials. The user adds products to the list which they can then use to create specials. In saving products separately like that they are able list the same products on special rather than having to recreate them each time.

### Screenshots

Todo: take screenshots of site, upload to repo, link here




### Tech stack (e.g. html, css, deployment platform)

The website is built using React on the frontend, MongoDB to store the data and Node with Express on the server side to retrieve and render data.
        
#### Prerequisites

- Node.js
- Yarn (or NPM)
- A mongo database

#### Configuration

- Download or clone this repo to your local machine
- Run `yarn install`
- Create a file called .env in the root directory of the repo and populate like so:
- `MONGODB_URI="mongodb://something/something"` -- the connection string for your mongo database
- `JWT_SECRET="something"` -- the secret used to encrypt and decrypt JWT for auth purposes
- `API_ENDPOINT="localhost:4000/"` -- the url the backend will be live at

#### Running the app

- `yarn dev` to run app in development mode with hot reloading for front and backend
- `yarn build` to build files as in production mode
- `yarn start` to run app as in production mode

In dev mode, the frontend will run on localhost:3000 and the backend on localhost:4000. In production, the backend will serve the prebuilt frontend to the browser, so go to localhost:4000 to see the results.

## Design documentation

### Design process

The process of designing the application started with talking to the clients and establishing their needs. During this discussion we were able to sketch out a basic outline which contained the features they needed. This basic drawing was turned into a wireframe of the application which was then built.

### User stories

Store owner user stories:

- US1: As a store owner I can login to the backend of my site
- US2: As a store owner I can create products and specials
- US3: As a store owner I can edit and update products and specials
- US4: As a store owner I can delete products and specials
- US5: As a store owner I can log out of the backend

Customer user stories:

- US1: As a customer I can view the store website
- US2: As a customer I can find store hours and contact information
- US3: As a customer I can not access the owner section of the site
- US4: As a customer I can view current specials on the front page

### A workflow diagram of the user journey/s.

![User Flow Diagram](https://github.com/TSaker95/FinalAssignmentdocs/blob/master/React%20Website%20Assignment/docs/UserFlowDiagram.png)

### Wireframes

[The wireframes can be viewed as a PDF here](https://github.com/TSaker95/FinalAssignmentdocs/blob/master/React%20Website%20Assignment/docs/wireframes.pdf)

### Database Entity Relationship Diagrams

![Entity Relationship Diagram](https://github.com/TSaker95/FinalAssignmentdocs/blob/master/React%20Website%20Assignment/docs/entity-relation.png)

### Data Flow Diagram

![Data Flow Diagram](https://github.com/TSaker95/FinalAssignmentdocs/blob/master/React%20Website%20Assignment/docs/Data-flow.png)

## Project management & planning process

### Client communications

## Client meetings

### 08 July 2019

Discussed with clients if current website is meeting their needs. They said that though it fulfills most of their needs, it would be good if they were able to put their products on the website. After discussing potential ways to achieve that, we concluded that a login portal that allowed them to create specials with their dates and prices which would be displayed on the homepage was the best solution. The client wanted something simple and that wouldn't require constantly contacting the developer to update the specials or homepage.

The client said that all they would need to show are dates, the product and the sale price of the product. They didn't need anything that tracked inventory, as long as they could add and remove specials easily and whenever needed.

### 11 July 2019

Met with clients to discuss our plan and show wireframes. Client was happy with our design and planned implementation. They did not offer any suggestions.

### 17 July 2019

Met with clients to update them on progress and show them current implementation. Clients were satisfied and again did not have any suggestions or improvements.

### 23 July 2019

Showed clients final state of the backend of the site. They were very pleased and were able to use it without issues.

### Screenshots of Trello board

![Screenshot, 10/7/19. ](docs/Trelloscreenshot-10-7-19.png)
![Screenshot, 11/7/19. ](docs/Trelloscreenshot-11-7-19.png)
![Screenshot, 12/7/19. ](docs/Trelloscreenshot-12-7-19.png)
![Screenshot, 15/7/19. ](docs/Trelloscreenshot-15-7-19.png)
![Screenshot, 16/7/19. ](docs/Trelloscreenshot-16-7-19.png)
![Screenshot, 23/7/19. ](docs/Trelloscreenshot-23-7-19.png)
![Screenshot, 25/7/19. ](docs/Trelloscreenshot-25-7-19.png)
    
## Short answers to short answer questions
### A: What are the most important aspects of quality software?

Functionality and maintainability. Functionality is generally evaluated by the client. Maintainability can be enhanced with the use of function composition, objects, automated testing (unit and integration), sensible levels of modularisation with useful separation of concerns, and non-spaghetti architecture.

### Provide an overview and description of your source control process.

For this project a master repo was used on which we created a production and development branch. The production branch was the master branch which was used to push the site live. The development branch is where changes were tested and confirmed before being pushed live. Each member of the team would create a feature branch of off the development branch, build their feature, push to the feature branch, submit and pull request, have it reviewed and then merged into the development branch. By using this method we avoided any serious conflicts and were able to utilise CI/CD to regularly push and test changes to the code without ruining the live site.

A .env file was created to store API endpoints and private information which was to be referenced throughout the application. This was then put in a .gitignore file along with the node_modules and any development only files.

### B: What libraries are being used in the app and why?

A full accounting can be found in src/package.json. Here are the cliff notes:

#### Serverside

Express is used to receive, process, and respond to http requests. Bcrypt, JWT, cookie-parser and CORS are used to enable auth functionality.

CORS also allows the frontend to talk to the backend in development mode and in production allows manual access to the API via postman or curl commands.

Mongoose is used to interface with our mongo database layer.

#### Frontend

The frontend is built in react, with companion packages react-dom, react-router-dom and prop-types.

The react-modal package was used to implement the modals seen in the various CRUD actions on the dashboard.

Axios is used to send requests to the backend.

#### Development

Locally, some configuration is handled by dotenv.
 
Testing is handled by jest. We also use supertest (for easy testing of API endpoints) and mongo-memory-server (to test database interactions with high confidence). Enzyme would be used to test the frontend but we didn’t get around to that.

Eslint was used to maintain consistent code styling and catch easy syntax errors.

Various helper packages are used to allow for hot reloading of client and server during development while still mirroring the production environment almost exactly.

#### Production

In production, the app is transpiled from jsx/ES6 into common JS with babel, acting off instructions in a webpack file.

### C: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

A team will be required to know what issue that they are solving first of all. They need client communication and a clear outline of what is expected before they can begin planning out the site they will create. Next they need to have the skills to coordinate their project, with communication and a clear designation of tasks. Thus would require the ability to use sites such as trello, slack and github and proficiency in the use of those tools. From there they would need the skills of a particular language.

 ### D: Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
 
Technical skills and requirements:

The majority of the application is in the JavaScript ecosystem, the frontend being React and the backend Node, Express and Mongo. This demands a foundational understanding of Javascript at minimum. 

Version control has also been crucial in the success of the project. The app has been completed collaboratively between three people, and utilising Git to avoid any major conflicts and double handling has been a fundamental requirement of the project.

Project management:

Due to the client-driven nature of the project, an ability to liaise and effectively communicate goals, plans and issues with non-technical people has been extremely important.

We have also been working within a strict time frame, so time management and team communication has been incredibly important.

Soft skills:

Patience, understanding and a calm mind.

### E: Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

Rhys:

Leading into the project I felt I had a solid understanding of the essential components of a fully functioning MERN application. I was able to outline my share of the work, draw from past lessons and resources, and begin building the foundation of the project. For the most part, any major issues or gaps in knowledge were eventually remedied through searching online and reading the documentation.

There are many areas I would improve were I to redo the project. Having learnt more about async operations in Javascript there are more efficient approaches to retrieving data than what I have used which would have also avoided some of the bugs I encountered. There is also a number of APIs included with React that could have been better utilised to make the app more efficient and easy to work in, context being the main one. 

While the clients were satisfied with the end product, and did not have any major UX/UI problems while using it, I feel the dashboard could be better in a lot of areas. I would have liked to implement pagination, search, filtering and bulk actions in order to improve the longevity and scalability of the product.

Finally, I think using an SQL database would have been a better approach. This is due to the relations that exist between entities, and the necessity to track these relations. 


