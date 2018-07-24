const knex = require('./knex')

module.exports = {
  findAll: function() {
    return knex('sticker').select('*')
  }
  ,noop: () => {}
}
