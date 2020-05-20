'use strict';
const express = require('express');
const config = require('./config')
module.exports = () => {
  // Constants
  const PORT = config.port;
  const HOST = config.host;

  // App
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello World ');
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
};
