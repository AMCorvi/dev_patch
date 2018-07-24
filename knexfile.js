module.exports = {development: {
  client:     'pg'
  ,connection: {
    host:     'corax.dev'
    ,port:     5432
    ,user: 'type'
    ,password: 'lit'
    ,database: 'type'
  }
  ,migrations: { directory: __dirname + '/db/migrations' }
  ,seeds:       { directory: __dirname + '/db/seeds' }
}}
