(function(){
    var clientDao = require('../Dao/clientDao');

    module.exports.getCentres = function (callback) {
        clientDao.getCentres(callback);
    };

    module.exports.getCommodities = function (callback) {
        clientDao.getCommodities(callback);
    };

})();