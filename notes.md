# Getting Started
- create a `package.json`
  - In terminal: cli command: `npm init -y` | `npm init`
    - initializes our project
  - An index of the project.
    - denotes required dependencies to run the project.
- Install our dependecies
  - express: `npm i express` | `npm install express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
  - tells our local repository to ignore the node_modules folder when backing up.
- node_modules folder
  - Provides us access to any "behind the scenes" code that helps run express and any other dependencies.
- package-lock.json
  - locks project into required dependencies. Helps with versioning.
- Create a root JS file
  - `app.js` or `index.js`
  - package.json is updated with the correct file: `app.js` or `index.js`

```json
"main": "app.js",
```
--- 

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app"
  },
```
- run with if using "node app" - `npm start`

## CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
  - GET / POST / PUT / DELETE depending on route.
  - Body
    - raw
    - JSON
    - Make a JSON object

### Prep our server to handle JSON objects
In `app.js` | `index.js`, we need to have this line of code:

```js
app.use(express.json());
```

## MVC
- Stands for Model View Controller
- Architecture pattern that helps our Separation of Concerns.
- View: browser, Postman, etc.
  - Application that interface with the server.
- Controller: Part of the server application which handles logic.
- Model: Database schematic

## Middleware
- A function that accesses the request and response
- Has a call stack:
  - request (req)
  - response (res)
  - next