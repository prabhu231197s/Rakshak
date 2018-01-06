(function(){
    var responseHandler = require('../Helpers/responseHandler');
    var clientService  = require('../Services/clientService');

    module.exports.getCentres = function (req, res) {

        try{
            clientService.getCentres(function (err, data) {
                if(err){
                    responseHandler.error(res,err);
                }
                else{
                    if(data.length > 0){
                        responseHandler.response(res,data);
                    }
                    else{
                        responseHandler.error(res,{message:"Something went wrong"});
                    }
                }
            });
        }
        catch(err){
            responseHandler.error(res,err);
        }

    };

    module.exports.getCommodities = function (req, res) {
        try{
            clientService.getCommodities(function (err, data) {
                if(err){
                    responseHandler.error(res,err);
                }
                else{
                    if(data.length>0){
                        responseHandler.response(res,data);
                    }
                    else{
                        responseHandler.error(res,{message:"Something went wrong"});
                    }
                }
            })
        }
        catch (err){
            responseHandler.error(res,err);
        }
    };

    module.exports.getPrice = function (req, res) {
        try{
            clientService.getPrice(req.body,function (err, data) {
                if(err){
                    responseHandler.error(res,err);
                }
                else{
                    var dat = data.Results.output1.value.Values[0];
                    var val = dat[5];
                    console.log(val);
                    responseHandler.response(res,val);
                }
            });
        }
        catch(err){
            responseHandler.error(res,err);
        }
    };

    module.exports.getLocation  = function (req, res) {
        try{
            clientService.getLocation(function (err, data) {
                if(err){
                    responseHandler.error(res,err);
                }
                else{
                    responseHandler.response(res,data);
                }
            })
        }
        catch(err){
            responseHandler.error(res,err);
        }
    }

})();