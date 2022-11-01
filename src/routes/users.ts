import express from 'express'

const router = express.Router()

router.get('/users/:id', (_req, res) => {
  res.send('Get a specific user')
})

router.post('/users/add', (_req, res) => {
  res.send('Add new user')
})

export default router
