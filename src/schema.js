const joi = require('@hapi/joi');

const { ENVIRONMENT, LOG_LEVEL } = require('./constant');

module.exports.configSchema = joi.object({
  HOST: joi.string().ip({ version: ['ipv4'] }).required(),
  PORT: joi.number().port().required(),
  DB_CONNECTION_STRING_TEMPLATE: joi.string().required(),
  DB_NAME_TEMPLATE: joi.string().required(),
  ENVIRONMENT: joi.string().valid(...Object.values(ENVIRONMENT)).required(),
  LOG_LEVEL: joi.string().valid(...Object.values(LOG_LEVEL)).required(),
});
