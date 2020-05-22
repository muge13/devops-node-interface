const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

const config={
  port: process.env.PORT||4000,
  host: process.env.HOST||'0.0.0.0',
  env: process.env.NODE_ENV||'development',
  jenkins:{
    url: process.env.JENKINS_URL,
    https: process.env.JENKINS_HTTPS,
    username: process.env.JENKINS_USERNAME,
    token: process.env.JENKINS_TOKEN,
    projects:[]
  },
  telegram:{
    token: process.env.TELEGRAM_TOKEN
  }
};
module.exports=config;