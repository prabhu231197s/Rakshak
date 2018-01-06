(function(){
    var connection = require('../Configs/dbConfig');

    module.exports.getCentres = function (callback) {
        try{
            var query = "SELECT * from centres";
            connection.query(query,function(err,data){
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    };

    module.exports.getCommodities = function (callback) {
        try{
            var query = "SELECT * from commodities";
            connection.query(query,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    }

})();