const routes = require('express').Router();
const JenkinsService = require("../../../services/Build/Jenkins");
const jenkins = new JenkinsService();


routes.get('/', async (req, res, next) => {
    jenkins.status().then((fullfilled)=>{
        // console.log(fullfilled);
        return res.json(fullfilled).status(200);
    }).catch(error=>{
            console.log(error)
    });
});
module.exports = routes;