const patchSeed = require('./seedData/patchSeed')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patch')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('patch').insert(patchSeed)
    })
}
