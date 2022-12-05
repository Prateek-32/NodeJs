const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
client.connect();
module.exports.connectDatabase = function () {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        let db = client.db('records');
        db.collection('collections').find().toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });
    });
}