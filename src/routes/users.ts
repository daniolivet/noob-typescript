import express from 'express'
import usersServices from '../services/Users/usersServices'

const router = express.Router()

router.get('/all', (_req, res) => {
  res.send(usersServices.getUsers())
})

router.get('/:id', (_req, res) => {
  res.send(usersServices.getUsers())
})

router.post('/add', (_req, res) => {
  res.send('Add new user')
})

export default router
