# SoftUni JS Back End Course Workshop

## Workshop 1 - Express and Templating

### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Config debugging and dev script `Node.JS: Launch Via Npm`
 - [x] Add Workshop Resources
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup static files
 - [x] Render Home Page
 - [x] Render About Page
 - [x] Add Layout
### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add movie data layer
 - [x] Add movie service
 - [x] Render single movie on home page
 - [x] Render all movies on home page
 - [x] Show no movies screen
### Create Movie
 - [x] Add Movie Controller
 - [x] Show create movie page
 - [x] Add routes
 - [x] Add 404 page
 - [x] Ready body data
 - [x] Create movie
   - [x] Add action
   - [x] Add service
   - [x] Add repository
 - [x] Redirect after creation
 - [x] Add unique if for each cerated movie
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page 
 - [x] GetOne movie from service
 - [x] Find movie by id from repository
 - [x] Render details page with dynamic data
### Search
 - [x] Show static search page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] By genre
   - [x] By title 
 - [x] Remember search words
### Bonuses
 - [x] Dynamic page title (basic)
 - [x] Rating (temp solution)
 - [x] File Persistance

## Workshop 2 - PostgreSQL and Prisma

### Prerequisites
 - [x] PostgreSQL Installed `psql --version`
 - [x] GUI Client 

### Setup Database
 - [x] Install and setup typescript support
 - [x] Change npm start script to use tsx `tsx --watch src/index.js`
 - [x] Install prisma related packages
 - [x] Initialize prisma `npx prisma init --output ../generated/prisma`
 - [x] Add database_url env variable
 - [x] Generate first client `npx prisma generate`
 - [x] Instantiate prisma client

### Setup models
 - [x] Add Movie model
 - [x] Migrate database `npx prisma migrate dev --name add_movies_table` or `npx prisma db push`

### Refactor Movies
 - [x] Remove uuid
 - [x] Create Movie
 - [x] Read all movies
 - [x] Movie details page 
 - [x] Remove file persistance related code

### Artist
 - [x] Add resources
 - [x] Add artist model
 - [x] Add artist view
 - [x] Add artist controller
 - [x] Add to routes
 - [x] Add header link
 - [x] Modify create form
 - [x] Add artist post action
 - [x] Add artist service
 - [x] Add artist repository

### Attach Artist to Movie
 - [x] Add relation between artists and movies (Implicit many-to-many)
 - [x] Add page view
 - [x] Add dynamic data
 - [x] Populate artist select
 - [x] Attach artist to movie function

### Show Artists on Details Page
 - [ ] Modify details view
 - [ ] Link to attach page
 - [ ] Show dynamic cast

### Bonuses
 - [ ] Show filtered artists in attach page
 - [ ] Search filter in db
 - [ ] Name in movie (Explicit Many-to-Many)
 - [ ] Modify service export