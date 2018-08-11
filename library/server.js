'use strict';

exports = module.exports = server;

// Start a UNIX socket and listens for connections on the given path.
function server(port) {
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(port, () => console.log('Example app listening on port ' + port))
  return true
}
