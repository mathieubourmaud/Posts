const pino = require('pino');

const CONFIG = require('./config');
const { API_VERSION: apiVersion } = require('./constant');
const { version: appVersion } = require('../package.json');

const level = CONFIG.LOG_LEVEL;
const logger = pino({ level });

module.exports = logger.child({
  CONFIG,
  apiVersion,
  appVersion,
});
