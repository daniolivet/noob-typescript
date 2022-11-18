import express from 'express'
import usersRouter from './routes/users'
import { DBConfig } from "./database/config"
import "reflect-metadata"
import 'dotenv/config'

const app = express()

app.use(express.json()) // Middleware

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/users', usersRouter)

const PORT = process.env.SERVER_PORT || 3000

// DB Connection
DBConfig.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`)
        console.log(`Database initialized! 🚀`);
      })
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
