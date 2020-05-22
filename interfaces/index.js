module.exports=(bot)=>{
    var TYPE = "zp.42";
    build=(msg, reply,next)=>{
        try {
            args = msg.args(4);
            switch (args[0].toLowerCase()) {
                case "jenkins": {
                    if(args.length>1) {
                        args.shift();
                        require('./build/jenkins')(args, reply, next);
                    }
                    else{
                        args[0]="status";
                        require('./build/jenkins')(args, reply, next);
                    }
                    break;
                }
                default: {
                    reply.text("Invalid build environment");
                    break;
                }
            }
        }catch (e) {
            reply.text("Please specify: /build {env}");
            reply.text("Available env: jenkins");

        }
    };
    bot.on("ready", function () {
        console.log("I'm user %s (%s).", bot.get("id"), bot.get("firstname"));
    });
    bot.command("start", "help", (msg, reply,next) => {
        reply.text("Welcome to the ThunderDome!!");
    });
    bot.message(function (msg, reply, next) {
        if(msg.text.toLowerCase()==="hello there"){
            reply.video("https://media1.giphy.com/media/7JC7bCJJGj44aBwB8p/giphy.gif");
        }
        next();
    });
    bot.command("build",build);
    bot.edited.command("build",build);


    // require('./cloud/aws')(bot);
};