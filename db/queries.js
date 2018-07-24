const knex = require('./knex')

module.exports = {
  findAll: function() {
    return knex('sticker').select('*')
  }

  ,findOne: function(id) {
    return knex('sticker')
      .where('id', id)
      .first()

  }
}
