const api = require('../db/api')
const getResourceApi = api.getResource
const setResourceApi = api.setResource

const express = require('express')
const { escapeHtml } = require('markdown-it/lib/common/utils')
const { body, validationResult } = require('express-validator')
const router = express.Router()
router.use(express.json())
// const { router } = require('../app');

// const testData = require('../test/testData.json');

// ROUTES

// Add a binding to handle '/'
router.get('/', (req, res) => res.status(400).json({ error: 'No data requested.' }))

router.get('/:resourceID', async (req, res) => {
  const lid = Number.parseInt(req.params.resourceID)
  if ([undefined, null, ''].includes(req.params.resourceID) || lid === 0 || Number.isNaN(lid)) {
    return res.status(400).json({ message: 'Invalid resource ID.' })
  }

  // const resource = testData.filter((oneResource)=> oneResource.id === lid)
  const resource = await getResourceApi(lid)

  if (resource === null) {
    return res.status(404).json({ message: 'No resource was found with that ID.' })
  }
  return res.json(resource.comments)
})

router.post('/add', body('comment').isLength({ min: 2 }), body('locationID').isNumeric(), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const lid = Number.parseInt(req.body.locationID)
  if ([undefined, null, ''].includes(req.body.locationID) || lid === 0 || Number.isNaN(lid)) {
    return res.status(400).json({ message: 'Invalid resource ID.' })
  } else if ([undefined, null, ''].includes(req.body.comment)) {
    return res.status(400).json({ message: 'Invalid comment.' })
  }

const pidInt = Number.parseInt(req.body.parentId)
pidInt = [undefined, null, ''].includes(req.body.parentId) || lid === 0 || Number.isNaN(lid) ? null : pidInt

  const resource = await getResourceApi(lid)

  const newComment = {
    _id: resource.comments.length + 1,
    body: escapeHtml(req.body.comment),
    username: 'Test User',
    userId: '2',
    parentId: pidInt,
    createdAt: Date.now()
  }
  resource.comments.push(newComment)
  const saved = setResourceApi(resource)
  if (saved === null) {
    return res.status(400).json({ message: 'Comment was not saved.' })
  }
  return res.json(newComment)
})

module.exports = router
