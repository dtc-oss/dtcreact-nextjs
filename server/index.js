require('dotenv').config()

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? process.env.PORT_DEV : process.env.PORT_PROD

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/index')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})