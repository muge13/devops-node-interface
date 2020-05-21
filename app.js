'use strict';
const express = require('express');
const Telegraf  = require('telegraf');
const config = require('./config');

const app = express();
require('./routes')(app);

const bot = new Telegraf(config.telegram.token);
bot.use(Telegraf.log())
require('./interfaces')(bot)

exports.app = app;
exports.bot = bot;