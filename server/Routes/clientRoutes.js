(function(){
    var responseHandler = require('../Helpers/responseHandler');
    var express = require('express');
    var router = express.Router();
    var commonService = require('../Services/commonService');
    var clientController = require('../Controllers/clientController');

    router.get('/',function (req, res) {
        res.send("Hello");
    });

    module.exports = router;
})();