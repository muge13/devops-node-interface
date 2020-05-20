module.exports =(app)=>{
    app.use('/health',require('./health'));
    app.use('/build/jenkins/',require('./build/jenkins'));
};