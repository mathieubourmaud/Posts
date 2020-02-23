const express = require('express');
const expressPino = require('express-pino-logger');
const HTTPStatusCode = require('http-status-code');
const routes = require('./routes');
const logger = require('./logger');
const { API_VERSION } = require('./constant');

const app = express();

app.use(expressPino({ logger }));

app.get('/status', (req, res) => res.send(HTTPStatusCode.getMessage(200)));
app.use(`/api/${API_VERSION}`, routes);

module.exports = app;
