import express from 'express'
import usersServices from '../services/Users/usersServices'
import { toNewUserEntry, parseId } from '../services/Users/validations'

const router = express.Router()

router.get('/all', (_req, res) => {
  res.send(usersServices.getUsers())
})

router.get('/:id', (req, res) => {

  try {

    const id = parseId(+req.params.id)

    const user = usersServices.getUserById(id)

    return ( user !== undefined ) 
      ? res.send(user)
      : res.status(404).send({
        code: 404,
        message: 'User not found.'
      })  

  } catch (err) {
    res.status(400).send({
      code: 400,
      message: err.message
    })
  }
  
})

router.post('/add', (req, res) => {

  try {    
    const newUser = toNewUserEntry(req.body);
  
    const addedUser = usersServices.addUser(newUser)
  
    res.send(addedUser)
  } catch (err) {
    res.status(400).send({
      code: 400,
      message: err.message
    })
  }

})

export default router
