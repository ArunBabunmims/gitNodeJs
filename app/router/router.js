const router = require('express').Router();
const controller = require('../controller/controller.js');


router.get('/index',controller.getPage);


module.exports = router;