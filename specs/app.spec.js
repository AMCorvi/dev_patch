const db = require('../db/knex')
const request = require('supertest')

const app = require('../app')

describe('patchapi', () => {
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

  test("findAll /api/v1/patches", function (done) {

    request(app)
      .get('/api/v1/patches')
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

  test("findOne /api/v1/patches/2", function (done) {

    request(app)
      .get('/api/v1/patches/2')
      .set('Accept', 'application/json')
      .expect('Content-Type',/json/)
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Object)
        expect(typeof (res.body.message)).toBe('object')
        expect(res.body.message.title).toBe('Rainbow JavaScript')
        done()
      })
  })

   // x_test("creat /api/vi/patch")
})
