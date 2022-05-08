var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors({credentials: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "ec2-**-***-***-**.ap-southeast-1.compute.amazonaws.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.json({text:"Hello Jorobim"})
  })

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
