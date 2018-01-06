(function(){
    var responseHandler = require('../Helpers/responseHandler');
    var express = require('express');
    var router = express.Router();
    var commonService = require('../Services/commonService');
    var smsService = require('../Services/smsService');
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

    router.get('/test',function (req, res) {
        smsService.sendSms(function (err, data) {
            if(err){
                responseHandler.error(res,err);
            }
            else{
                responseHandler.response(res,data);
            }
        })
    });

    router.get('/location',function (req, res) {
        clientController.getLocation(req,res);
    });

    module.exports = router;
})();