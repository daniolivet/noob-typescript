import express from 'express'
import usersServices from '../services/Users/usersServices'
import { 
  toNewUserEntry,
  parseId, 
  toUpdateUserEntry
} from '../services/Users/validations'

const router = express.Router()

router.get('/', async (_req, res) => {
  let users = await usersServices.getUsers()

  res.status(200).send({
    code: 200,
    message: 'Users found',
    data: users
  })
})

router.get('/:id', async (req, res) => {

  try {
    const id = parseId(+req.params.id)

    const user = await usersServices.getUserById(id)
    
    if( Object.keys(user).length !== 0) {
      res.status(200).send({
        code: 200,
        message: 'User found',
        data: user
      })
    }

    res.status(404).send({
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

router.post('/add', async (req, res) => {

  try {    
    const newUser = toNewUserEntry(req.body);
  
    const addedUser = await usersServices.addUser(newUser)

    res.status(200).send({
      code: 200,
      message: 'User added',
      data: addedUser
    })
  } catch (err) {
    res.status(400).send({
      code: 400,
      message: err.message
    })
  }

})

router.delete('/:id', async (req, res) => {

  try {
    const id = parseId(+req.params.id)

    const userDeleted = await usersServices.deleteUser(id)
    
    if( userDeleted ) {
      res.status(200).send({
        code: 200,
        message: 'User deleted.',
      })
    }

    res.status(500).send({
      code: 500,
      message: `Something was wrong deleting user with id: ${id}.`,
    })
  
  } catch (err) {
    res.status(500).send({
      code: 500,
      message: err.message
    })
  }

})

router.put('/:id', async (req, res) => {
  try {
    const id          = parseId(+req.params.id)
    const newUserData = toUpdateUserEntry(req.body)

    const userUpdated = await usersServices.updateUser(id, newUserData)

    if( userUpdated ) {
      res.status(200).send({
        code: 200,
        message: 'User updated.',
      })
    }

    res.status(500).send({
      code: 500,
      message: `Something was wrong updating user with id: ${id}.`,
    })
  } catch (err) {
    res.status(400).send({
      code: 400,
      message: err.message
    })
  }
})

export default router
