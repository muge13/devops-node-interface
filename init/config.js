const config=require("../config");
const JenkinsService = require("../services/Build/Jenkins");
const jenkins = new JenkinsService();
module.exports=()=> {
    if (config.jenkins.projects.length === 0) {
        jenkins.jobs().then((fullfilled) => {
                fullfilled.forEach(el => {
                    config.jenkins.projects.push(el.name);
                });
        }).catch(error => {
            console.log(error);
        });

    }
};