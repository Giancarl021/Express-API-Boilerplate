const express = require('express');
const routes = express.Router();

const HomeController = require('./controllers/Home');
const RedirectController = require('./controllers/Redirect');

const AuthorizeController = require('./controllers/Authorize');

const Auth = require('./middlewares/Auth');
const Refresh = require('./middlewares/Refresh');

// Authentication
routes.post('/authorize', AuthorizeController);
routes.post('/refresh', Refresh, AuthorizeController);

routes.get('/', HomeController);
routes.all('*', RedirectController);

module.exports = routes;
