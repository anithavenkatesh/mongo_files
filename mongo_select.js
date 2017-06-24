var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db_node";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[1].address);
    db.close();
  });
});
