import express from 'express'
import usersRouter from './routes/users'
import { DBConfig } from "./Database/data-source"
import "reflect-metadata"

// establish database connection
DBConfig.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

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
