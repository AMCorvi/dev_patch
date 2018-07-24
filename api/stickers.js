const express = require('express')
const router = express.Router()
const db = require('../db/queries')

router.get('/', (req, res) => {
  db.findAll().then(data =>
    res.json({message: data})
  )
})

module.exports = router
