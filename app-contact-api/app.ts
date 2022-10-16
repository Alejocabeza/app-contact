import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dbConnect } from './config/mongo'
import { router } from './routes'
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

/**
 * api test
 */
app.use(router)

dbConnect()

export { app }
