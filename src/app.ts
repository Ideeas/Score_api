import express from 'express'
import sequelize from './database'
import dotenv from 'dotenv'
import UserRouter from './routes/User'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

sequelize.sync().catch(error => new Error(error))

app.use(express.json())

app.use('/api', UserRouter)

app.use((req, res, next) => {
  res.status(404).send()
})

app.use((req, res, next) => {
  res.status(500).send()
})

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`)
})
