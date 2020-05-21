const app = require('./app');
const config = require('./config');
const PORT = config.port;
app.app.listen(PORT,err=>{
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }
  console.log(`Server listening on port: ${PORT}`);
});
app.bot.launch();