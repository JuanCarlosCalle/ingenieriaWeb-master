const bodyParser = require('body-parser');
const logger = require('morgan');
const express = require('express');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(logger('dev'));
  app.set('port',  process.env.PORT || 3000);
};
