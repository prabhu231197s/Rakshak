(function () {
    var nexmo = require('../Configs/smsConfig');

    var from = 'Nexmo';
    var to = '919840261364';
    var text = 'A text message sent using the Nexmo SMS API';
    module.exports.sendSms = function (callback) {
        try{
            nexmo.message.sendSms(from,to,text,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    };

})();