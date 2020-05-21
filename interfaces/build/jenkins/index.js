const JenkinsService = require("../../../services/Build/Jenkins");
const jenkins = new JenkinsService();
const Markup = require('telegraf/markup');

module.exports = (bot) => {
    bot.command('jenkins', ({reply}) => {
        return reply("Jenkins commands",Markup
        .keyboard([
            ['jenkins status']
        ])
        .oneTime()
        .resize()
        .extra()
        );        
    });
    bot.hears('jenkins status', (ctx) =>{
        jenkins.status().then((fullfilled)=>{
            ctx.reply(fullfilled);
        }).catch(error=>{
            console.log(error)
        });
    });
};
