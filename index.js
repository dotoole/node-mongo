var mongojs = require('mongojs');
var url = 'mongodb://demo:demo@localhost:27017/testdb';
var Q = require('q');


module.exports = function() {
    var testServer = {
        hello: function() {
            return 'Hello, world';
        },
        getDbVersion: function() {
            var deferred = Q.defer();
            var db = mongojs(url, ['message']);
            db.message.find(function(err, docs) {
                if(!err) {
                    console.log(docs[0].message);
                    deferred.resolve(docs[0].message);
                } else {
                    deferred.reject(err);
                }
            });
            return deferred.promise;
        }
    };
    return testServer;
}();
