(function(){
    var responseHandler = require('../Helpers/responseHandler');
    var express = require('express');
    var router = express.Router();
    var commonService = require('../Services/commonService');
    var clientController = require('../Controllers/clientController');

    router.get('/',function (req, res) {
        res.send("Hello");
    });

    router.get('/getCentres',function (req, res) {
        clientController.getCentres(req,res);
    });

    router.get('/getCommodities',function (req, res) {
        clientController.getCommodities(req,res);
    });

    router.post('/price',function (req, res) {
        clientController.getPrice(req,res);
    });

    module.exports = router;
})();