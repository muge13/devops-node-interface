'use strict';
const express = require('express');
// const Telegraf  = require('telegraf');
const config = require('./config');
const botgram = require("botgram")

const app = express();
require('./routes')(app);

const bot= botgram(config.telegram.token);
require('./interfaces')(bot)

//initialize services
const init=require("./init/config");
init();

exports.app = app;
exports.bot = bot;