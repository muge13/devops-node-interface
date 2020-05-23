
const map={
    jenkins: {
        general: {
            tree:"nodeName,mode,quietingDown"
        }
        ,
        jobs:{
            tree:"jobs[name,color]",
        },
        job_info: {
            tree: "name,color,healthReport[description,score],lastBuild[number,url],lastSuccessfulBuild[number,url],lastFailedBuild[number,url]"
        },
        job_history:{
            tree:"name,lastBuild[number,url],lastCompletedBuild[number,url],lastFailedBuild[number,url],lastStableBuild[number,url],lastSuccessfulBuild[number,url],lastUnstableBuild[number,url],lastUnsuccessfulBuild[number,url]"
        },
        job_build_info:{
            tree:"fullDisplayName,result,url,timestamp,duration,estimatedDuration"
        },
        job_build_logs:{
            tree:""
        }
    }
};
module.exports=map;