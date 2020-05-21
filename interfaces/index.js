module.exports=(bot)=>{
    bot.start((ctx) => ctx.reply('Welcome!'));
    bot.help((ctx) => ctx.reply('Send me a command'));
    
    bot.hears('Hello there', (ctx) => ctx.reply('General Kenobi!'));
    
    require('./build/jenkins')(bot);
};