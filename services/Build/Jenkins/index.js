const config = require("../../../config");
const map= require("../../../config/map");
const axios = require('axios');

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
    status() {
        return new Promise((resolve,reject)=>{
            var url = '/api/json';
            this.instance.request(
                {
                    url: url,
                    method: 'get',
                    params: {
                        tree: map.jenkins.general
                    }
                })
                .then(resp => {
                    resolve(resp.data);
                    console.log(resp.status);          
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
                        tree: map.jenkins.jobs
                    }
                })
                .then(resp => {
                    resolve(resp.data.jobs);
                    console.log(resp.status);
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