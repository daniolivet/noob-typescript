import express from 'express'
import usersRouter from './routes/users'

const app = express()

app.use(express.json()) // Middleware

const PORT = 3000

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
