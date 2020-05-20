const config = require("../../../config");
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
                        pretty: true
                    }
                })
                .then(resp => {
                    let data={
                        mode: resp.data.mode,
                        jobs: []
                    }
                    resp.data.jobs.forEach(element => {
                        data.jobs.push({
                            name: element.name,
                            status: element.color
                        });                       
                    });
                    resolve(data);
                    console.log(resp.status);          
                })
                .catch(err => {
                    reject(err);
                    console.log(err);          
                }).then(() => {
                    console.log("complete");          
                });
            
        });
    }
}
module.exports = Jenkins;