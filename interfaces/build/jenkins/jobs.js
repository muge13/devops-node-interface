const config=require("../../../config");
const JenkinsService = require("../../../services/Build/Jenkins");
const jenkins = new JenkinsService();
const helper =require("../../../helper");

module.exports = (args,reply,next) => {
    console.log(config.jenkins.projects);
    if(args[0].toLowerCase()==="list"){
        jenkins.jobs().then((fullfilled)=>{
            reply.markdown(helper.parse_to_md(JSON.stringify(fullfilled)));
        }).catch(error=>{
            reply.text(error);
            console.log(error);
        });
    }
    else{
        reply.text("No job to that on record");
    }

};