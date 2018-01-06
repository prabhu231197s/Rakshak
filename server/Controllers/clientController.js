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
    }

})();