import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import router from './routes'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(helmet())

app.use('/api', router)

export default app
