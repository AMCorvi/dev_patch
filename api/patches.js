const express = require('express')
const router = express.Router()
const db = require('../db/queries')

const is = require('is-type-of')

/* api/v1/patch endpoint */
router.get('/', (req, res) => {
  db.findAll().then(data =>
    res.json({
      message: data
      ,error:   null
    })
  )
})

router.get('/:id', validateParamOfInteger, function(req, res) {
  db.findOne(req.params.id).then(data =>
    res.json({
      message: data
      ,error:   null
    })
  )
})

router.post('/', (req, res, next) => {
  const patch = req.body
  if (validPatchObject(patch)) {
    db
      .createPatch(patch)
      .then(patch =>
        res.json({
          message: patch
          ,error:   null
        })
      )
      .catch(err => next(new Error(err)))
  } else {
    next(
      new TypeError(
        'Request Body must contain a title and url; both of type \'string\''
      )
    )
  }
})

router.patch('/:id', validateParamOfInteger, (req, res, next) => {
  const patch = req.body
  const requestedId = req.params.id

  if (validPatchObject(patch)) {
    db
      .patchPatch(patch, requestedId)
      .then(patch =>
        res.json({
          message: patch
          ,error:   null
        })
      )
      .catch(err => next(err))
  }
})

router.delete('/:id', validateParamOfInteger, (req, res, next) => {
  const requestedId = req.params.id
  db
    .removePatch(requestedId)
    .then(() =>
      res.json({
        message: ` Patch #${requestedId} was successfully removed `
        ,error:   null
      })
    )
})

/* Helper function */
function validateParamOfInteger(req, res, next) {
  try {
    let requestedId = req.params.id
    requestedId = is.string(requestedId)
      ? Number.parseInt(requestedId)
      : is.int(requestedId)
        ? requestedId
        : is.float(requestedId) ? Number.parseInt(requestedId) : requestedId

    if (is.int(requestedId)) return next()
    else throw 'Invalid ID - (id must an value of type integer)'
  } catch (error) {
    next(new TypeError(error))
  }
}

function validPatchObject(patch) {
  const hasTitle = typeof patch.title === 'string' && patch.title.trim() !== ''

  const hasUrl = typeof patch.url === 'string' && patch.url.trim() !== ''

  return hasTitle && hasUrl
}

module.exports = router
