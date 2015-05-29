var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@localhost:27017/testdb', ['message']);
console.log(db.message);
db.message.find(function(err, docs) {
    console.log(err);
    console.log(docs);
});
