import express from 'express'
import path from 'path'

import plants from './routes/plants'
import extplants from './routes/extplants'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/extplants', extplants)
server.use('/api/v1/plants', plants)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

export default server

// if (process.env.NODE_ENV === 'production') {
//   server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
//   server.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../index.html'))
//   })
// }
