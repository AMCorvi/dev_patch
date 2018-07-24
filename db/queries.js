const knex = require('./knex')

module.exports = {
  findAll: function() {
    return knex('patch').select('*')
  }

  ,findOne: function(id) {
    return knex('patch')
      .where('id', id)
      .first()

  }
}
