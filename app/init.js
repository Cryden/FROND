const fs = require('fs')

const express = require('express')
const app = express()

const port = 8000

function checkDefaultConfig () {
  if (fs.existsSync('frond.config.yml')) {
  } else {
    fs.appendFile('frond.config.yml', 'Hello content!', function (err) {
      if (err) throw err
      console.log('Saved!')
    })
  }
}

function init () {
  app.get('/', (request, response) => {
    response.send('Configure FROND!')
  })

  app.post('/', (request, response) => {
    checkDefaultConfig()
    response.send('FROND config file created!')
  })

  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
  })
}

module.exports = init()
