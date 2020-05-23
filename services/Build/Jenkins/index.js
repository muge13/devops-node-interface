const config = require("../../../config");
const map= require("../../../config/map");
const axios = require('axios');
const _ = require('lodash/core');
const ST = require('stjs');


class Jenkins {
    constructor() {
        this.base_url = config.jenkins.url;
        this.https = config.jenkins.https;
        this.instance = axios.create({
            baseURL: this.base_url,
            auth: {
                username: config.jenkins.username,
                password: config.jenkins.token
            },
        });
    }
    filter_json (filter,data,options={input: 'string'}){
        data=JSON.stringify(data);

    }
    status() {
        return new Promise((resolve,reject)=>{
            var url = '/api/json';
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.general.tree
                    }
                })
                .then(resp => {
                    var template= {
                        nodeName: "{{nodeName}}",
                        mode: "{{mode}}",
                        quietingDown: "{{quietingDown}}"
                    };
                    var data=ST.select(resp.data)
                        .transformWith(template).root();
                    resolve(data);

                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
    jobs() {
        return new Promise((resolve,reject)=>{
            var url = '/api/json';
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.jobs.tree
                    }
                })
                .then(resp => {
                    var template= {
                        jobs:{
                            "{{#each jobs}}":{
                                "description":"{{name}}",
                                "score":"{{color}}"
                            }
                        }
                    };
                    var data=ST.select(resp.data)
                        .transformWith(template).root();
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
    job_info(job_name) {
        return new Promise((resolve,reject)=>{
            var url = `job/${job_name}/api/json`;
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.job_info.tree
                    }
                })
                .then(resp => {
                    var template={
                        name: "{{name}}",
                        color: "{{color}}",
                        healthReport:{
                            "{{#each healthReport}}":{
                                "description":"{{description}}",
                                "score":"{{score}}"
                            }
                        },
                        lastBuild:{
                            number: "{{this.lastBuild.number}}",
                            url: "{{this.lastBuild.url}}"
                        },
                        lastSuccessfulBuild:{
                            number: "{{this.lastSuccessfulBuild.number}}",
                            url: "{{this.lastSuccessfulBuild.url}}"
                        },
                        lastFailedBuild:{
                            number: "{{this.lastFailedBuild.number}}",
                            url: "{{this.lastFailedBuild.url}}"
                        }
                    };
                    var data=ST.select(resp.data)
                        .transformWith(template).root();
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {

            });

        });
    }
    job_history(job_name) {
        return new Promise((resolve,reject)=>{
            var url = `job/${job_name}/api/json`;
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.job_history.tree
                    }
                })
                .then(resp => {
                    var template={
                        name: "{{name}}",
                        lastBuild:{
                            number: "{{this.lastBuild.number}}",
                            url: "{{this.lastBuild.url}}"
                        },
                        lastCompletedBuild:{
                            number: "{{this.lastCompletedBuild.number}}",
                            url: "{{this.lastCompletedBuild.url}}"
                        },
                        lastFailedBuild:{
                            number: "{{this.lastFailedBuild.number}}",
                            url: "{{this.lastFailedBuild.url}}"
                        },
                        lastStableBuild:{
                            number: "{{this.lastStableBuild.number}}",
                            url: "{{this.lastStableBuild.url}}"
                        },
                        lastSuccessfulBuild:{
                            number: "{{this.lastSuccessfulBuild.number}}",
                            url: "{{this.lastSuccessfulBuild.url}}"
                        },
                        // lastUnstableBuild:{
                        //     number: "{{this.lastUnstableBuild.number}}",
                        //     url: "{{this.lastUnstableBuild.url}}"
                        // },
                        lastUnsuccessfulBuild:{
                            number: "{{this.lastUnsuccessfulBuild.number}}",
                            url: "{{this.lastUnsuccessfulBuild.url}}"
                        },

                    };
                    var data=ST.select(resp.data)
                        .transformWith(template).root();
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
    job_build_info(job_name,build) {
        return new Promise((resolve,reject)=>{
            var url = `job/${job_name}/${build}/api/json`;
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.job_build_info.tree
                    }
                })
                .then(resp => {
                    var template={
                        name: "{{fullDisplayName}}",
                        result:"{{result}}",
                        url:"{{url}}",
                        timestamp:"{{timestamp}}",
                        duration:"{{duration}}",
                        estimatedDuration: "{{estimatedDuration}}"
                    };
                    var data=ST.select(resp.data)
                        .transformWith(template).root();
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
    job_build_logs(job_name,build) {
        return new Promise((resolve,reject)=>{
            var url = `job/${job_name}/${build}/logText/progressiveText`;
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        start:0
                    }
                })
                .then(resp => {
                    resolve(resp.data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
    job_build(job_name) {
        return new Promise((resolve,reject)=>{
            var url = `job/${job_name}/build`;
            this.instance.request(
                {
                    url: url,
                    method: 'post',
                    data: {
                    }
                })
                .then(resp => {
                    var template={
                        status:"{{status}}",
                        statusText:"{{statusText}}",
                        queueLocation:"{{headers.location}}",
                    };
                    var data=ST.select(resp)
                        .transformWith(template).root();
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                }).then(() => {
                // console.log("complete");
            });

        });
    }
}
module.exports = Jenkins;