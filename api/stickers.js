const express = require('express')
const router = express.Router()
const db = require('../db/queries')

function validParamInteger(req, res, next) {
  if (!isNan(req.param.id)) return next()
  next(new TypeError('Invalid ID - (id must an value of type integer'))
}

router.get('/', (req, res) => {
  db.findAll().then(data => res.json({ message: data }))
})

router.get('/:id', function(req, res, next) {
  db.findOne(req.params.id).then(data => res.json({ message: data }))
})

module.exports = router
