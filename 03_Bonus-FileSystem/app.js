const express = require('express');
const app = express();
const PORT = 4000;
const routes = require('./controllers/routes.controller');

app.use(express.json());

app.use('/routes', routes);

app.listen(PORT, () => console.log(`Running: ${PORT}`));