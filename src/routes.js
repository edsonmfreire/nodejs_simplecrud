const express = require("express");
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.get('/devs/:user', DevController.show);
routes.delete('/devs/:user', DevController.delete);
routes.put('/devs/:user', DevController.update);
routes.post('/devs', DevController.store);

module.exports = routes;