var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({text:"Hello Backend"})
  })

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})