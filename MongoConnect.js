const MongoClient=require('mongodb').MongoClient;
const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);
client.connect()
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    let db = client.db('Assignment1');
    db.collection('Assignment1').find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});
