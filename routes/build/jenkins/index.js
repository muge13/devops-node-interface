const routes = require('express').Router();
const JenkinsService = require("../../../services/Build/Jenkins");
const jenkins = new JenkinsService();
routes.get('/', async (req, res, next) => {
    jenkins.status().then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });

    });
});
routes.get('/jobs', async (req, res, next) => {
    jenkins.jobs().then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
routes.get('/jobs/:name/info', async (req, res, next) => {
    jenkins.job_info(req.params.name).then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
routes.get('/jobs/:name/build', async (req, res, next) => {
    jenkins.job_build(req.params.name).then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
routes.get('/jobs/:name/history', async (req, res, next) => {
    jenkins.job_history(req.params.name).then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
routes.get('/jobs/:name/:build_id/info', async (req, res, next) => {
    jenkins.job_build_info(req.params.name,req.params.build_id).then((fullfilled)=>{
        return res.json(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
routes.get('/jobs/:name/:build_id/logs', async (req, res, next) => {
    jenkins.job_build_logs(req.params.name,req.params.build_id).then((fullfilled)=>{
        return res.send(fullfilled).status(200);
    }).catch(error=>{
        console.error(error);
        return res.status(404).send({
            message: "Reference not found"
        });
    });
});
module.exports = routes;