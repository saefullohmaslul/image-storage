import express from 'express'
const debug = require('debug')('server:app')
const app = express()
import user from './routes/user'

app.use('/upload', user)

app.listen(3000, () => {
  debug(`Server running in port: 3000`)
})