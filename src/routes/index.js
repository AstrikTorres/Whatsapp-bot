require('dotenv').config()
const express = require('express');
const whatsappScheduledRoute = require('./whatsappScheduled.route');

const routerApi = (app) => {
  const router = express.Router();
  const apiVersion = `/api/${process.env.API_VERSION}`;
  app.use(apiVersion, router);

  router.use('/', whatsappScheduledRoute);
}

module.exports = routerApi;