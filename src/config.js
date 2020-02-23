const { ENVIRONMENT, LOG_LEVEL } = require('./constant');

const config = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || '5000',
  DB_CONNECTION_STRING_TEMPLATE: process.env.DB_CONNECTION_STRING_TEMPLATE || 'mongodb://localhost:27017',
  DB_NAME_TEMPLATE: process.env.DB_NAME_TEMPLATE || 'posts_db',
  ENVIRONMENT: process.env.ENVIRONMENT || ENVIRONMENT.LOCAL,
  LOG_LEVEL: process.env.LOG_LEVEL || LOG_LEVEL.INFO,
};

module.exports = config;
