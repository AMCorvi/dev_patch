const knex = require('knex')
const config = require('../knexfile')

const environment = process.env.NODE_ENV || 'development'
const env_config = config[environment]

const dbConnection = knex(env_config)

module.exports = dbConnection
