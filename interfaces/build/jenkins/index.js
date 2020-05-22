const JenkinsService = require("../../../services/Build/Jenkins");
const jenkins = new JenkinsService();
const helper =require("../../../helper");
module.exports = (args,reply,next) => {
    status=()=>{
        jenkins.status().then((fullfilled)=>{
            reply.markdown(helper.parse_to_md(JSON.stringify(fullfilled)));
        }).catch(error=>{
            reply.text(error);
            console.log(error)
        });

    };
    if(args[0]){
        switch (args[0].toLowerCase()) {
            case "status": {
                status();
                break;
            }
            case("jobs"||"job"): {
                if(args.length>1) {
                    args.shift();
                    require('./jobs')(args, reply, next);
                }else{
                    args[0]="list";
                    require('./jobs')(args, reply, next);
                }
                break;
            }
            default: {
                reply.text("Command not found in Jenkins");
                break;
            }

        }
    }else{
        reply.text(status());
    }

};
