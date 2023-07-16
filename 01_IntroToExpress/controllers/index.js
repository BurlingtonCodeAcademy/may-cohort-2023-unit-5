const todoController = require('./todo.controller')
const practiceController = require('./practice.controller');
const routesController = require('./routes.controller')

module.exports = {
    todo: todoController,
    practice: practiceController,
    routes: routesController
}