'use strict';
const express = require('express');
const config = require('./config');
const app = express();
require('./routes')(app);
module.exports = app;