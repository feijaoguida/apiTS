import express from 'express'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

const swaggerDocument = require('../swagger.json')

const app = express()

app.use(cors())

app.use(express.json())
app.use(
  '/docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);


app.use(router)

export { app }

