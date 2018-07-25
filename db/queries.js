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
  ,createPatch: function (patch) {
    return knex('patch')
      .returning('title')
      .insert(patch)
  }
  ,patchPatch: function (patch, id) {
    return knex('patch')
      .where('id', id)
      .update(patch, "*")
  }
 ,removePatch: function(id) {
    return knex('patch')
      .where('id', id)
      .del()
  }
}
