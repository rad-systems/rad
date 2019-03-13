'use strict';

exports = module.exports = server;

// Start a UNIX socket and listens for connections on the given path.
function server(port) {
  var fs = require('fs')
  var http = require('http')
  var https = require('https')
  var privatekey = fs.readFileSync('/root/.config/acme/live/dock.custom.website/privkey.pem', 'utf8')
  var certificate = fs.readFileSync('/root/.config/acme/live/dock.custom.website/cert.pem', 'utf8')
  var credentials = {key: privatekey, cert: certificate}

  const express = require('express')
  const app = express()
  app.get('/', (req, res) => res.send('Hi World!'))

  // var httpServer = http.createServer(app)
  // httpServer.listen(port, () => console.log('app listening on port ' + port))

  var httpsServer = https.createServer(credentials, app)
  httpsServer.listen(port, () => console.log('app listening on port ' + port))
  
  return true
}


