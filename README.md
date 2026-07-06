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
 - [ ] Add routes
 - [ ] Add 404 page
 - [ ] Ready body data
 - [ ] Create movie
   - [ ] Add action
   - [ ] Add service
   - [ ] Add repository
 - [ ] Redirect after creation
 - [ ] Add unique if for each cerated movie
### Details
 - [ ] Add navigation button for detail page
 - [ ] Add route with param for details page 
 - [ ] GetOne movie from service
 - [ ] Find movie by id from repository
 - [ ] Render details page with dynamic data
### Search
 - [ ] Show static search page
 - [ ] Render all movies
 - [ ] Modify search form
 - [ ] Filter movies
   - [ ] By year
   - [ ] By genre
   - [ ] By title 
 - [ ] Remember search words
### Bonuses
 - [ ] Dynamic page title (basic)
 - [ ] Rating (temp solution)
 - [ ] File Persistance

## Workshop 2 - PostgreSQL and Prisma

### Prerequisites
 - [ ] PostgreSQL Installed `psql --version`
 - [ ] GUI Client 

### Setup Database
 - [ ] Install and setup typescript support
 - [ ] Change npm start script to use tsx `tsx --watch src/index.js`
 - [ ] Install prisma related packages
 - [ ] Initialize prisma `npx prisma init --output ../generated/prisma`
 - [ ] Add database_url env variable
 - [ ] Generate first client `npx prisma generate`
 - [ ] Instantiate prisma client

### Setup models
 - [ ] Add Movie model
 - [ ] Migrate database `npx prisma migrate dev --name add_movies_table` or `npx prisma db push`

### Refactor Movies
 - [ ] Remove uuid
 - [ ] Create Movie
 - [ ] Read all movies
 - [ ] Movie details page 
 - [ ] Remove file persistance related code

### Artist
 - [ ] Add resources
 - [ ] Add artist model
 - [ ] Add artist view
 - [ ] Add artist controller
 - [ ] Add to routes
 - [ ] Add header link
 - [ ] Modify create form
 - [ ] Add artist post action
 - [ ] Add artist service
 - [ ] Add artist repository

### Attach Artist to Movie
 - [ ] Add relation between artists and movies (Implicit many-to-many)
 - [ ] Add page view
 - [ ] Add dynamic data
 - [ ] Populate artist select
 - [ ] Attach function

### Show Artists on Details Page
 - [ ] Modify details view
 - [ ] Link to attach page
 - [ ] Show dynamic cast

### Bonuses
 - [ ] Show filtered artists in attach page
 - [ ] Search filter in db
 - [ ] Name in movie (Explicit Many-to-Many)
 - [ ] Modify service export