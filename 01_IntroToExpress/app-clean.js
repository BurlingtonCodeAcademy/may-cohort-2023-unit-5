// IMPORTS
const express = require('express');
const app = express();
const PORT = 4000;

const { todo, practice, routes } = require('./controllers');
const { logTime } = require('./utils');
const cors = require('cors');

// INDEX.HTML
app.use(express.static(`${__dirname}/public`));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded());
app.use(cors);
app.use(logTime);

// ROUTES / CONTROLLERS
app.use('/practice', practice);
app.use('/todo', todo);
app.use('/routes', routes);

// RUNNING
app.listen(PORT, 
    () => console.log(`Server is running on port: ${PORT}`)
    );