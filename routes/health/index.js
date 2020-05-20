const routes = require('express').Router();

routes.get('/', function (req, res, next) {
    return res.json({ message: 'Operating at peak!' }).status(200);
});
module.exports = routes;