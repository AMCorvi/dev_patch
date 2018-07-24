const db = require('../db/knex')
const request = require('supertest')

const app = require('../app')

describe('sticker api', () => {
  beforeAll(function(done) {
    db.migrate.latest().then(function() {
      db.seed.run()
    }).then(function () { done() })
  })

  test("404 response on invalid endpoint", function(done) {
    request(app)
      .get('/invalid')
      .expect("Content-Type", /json/)
      .expect(404)
      .then(res => {
        expect(res.body.message).toEqual('Not Found')
        expect(typeof res.body.error).toBe('object')
        done()
      })


  })

  test("findAll /api/v1/stickers", function (done) {

    request(app)
      .get('/api/v1/stickers')
      .set('Accept', 'application/json')
      .expect('Content-Type',/json/)
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toMatchSnapshot()
        expect(Array.isArray(res.body.message)).toBe((true))
        done()
      })
  })

})
