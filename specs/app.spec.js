const db = require('../db/knex')
const request = require('supertest')
const is = require('is-type-of')

const app = require('../app')

describe('patchapi', () => {
  const new_patch = {
    title:       'Hack The Planet'
    ,description: 'Badge of Honor'
    ,rating:      80
    ,url:
      'https://www.hacktheplanet.com/uploads/5/0/0/4/50049617/s916520563844915582_p2_i1_w640.png'
  }

  beforeAll(function(done) {
    db.migrate
      .latest()
      .then(function() {
        db.seed.run()
      })
      .then(function() {
        done()
      })
  })

  test('404 response on invalid endpoint', function(done) {
    request(app)
      .get('/invalid')
      .expect('Content-Type', /json/)
      .expect(404)
      .then(res => {
        expect(res.body.message).toEqual('Not Found')
        expect(typeof res.body.error).toBe('object')
        done()
      }).catch(err => {
        throw err
      })
  })

  test('findAll /api/v1/patches', function(done) {
    request(app)
      .get('/api/v1/patches')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toMatchSnapshot()
        expect(Array.isArray(res.body.message)).toBe(true)
        done()
      })
  })

  test('findOne /api/v1/patches/2', function(done) {
    request(app)
      .get('/api/v1/patches/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(is.object(res.body.message)).toBe('object')
        expect(res.body.message.title).toBe('Rainbow JavaScript')
        done()
      })
  })


  test('POST on /api/v1/patches', function(done) {
    request(app)
      .post('/api/v1/patches')
      .send(new_patch)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(is.object(res.body)).toEqual(true)
        expect(res.body.message[0]).toHaveProperty('title', 'Hack The Planet')
        expect(res.body.message[0]).toMatchObject(new_patch)
        done()
      })
  })

  test('PATCH on /api/v1/patches', function(done) {
    request(app)
      .post('/api/v1/patches')
      .send(new_patch)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(is.object(res.body)).toEqual(true)
        expect(res.body.message[0]).toHaveProperty('title', 'Hack The Planet')
        expect(res.body.message[0]).toMatchObject(new_patch)
        done()
      })
  })

})
