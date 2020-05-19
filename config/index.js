const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

const config={
  port: process.env.PORT||4000,
  host: process.env.HOST||'0.0.0.0'
};
module.exports=config;