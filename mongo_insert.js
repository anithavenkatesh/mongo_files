
var colection = require('./mongo_connectivity');
/*var MongoClient = require('mongodb');
var url = 'mongodb://localhost:27017/db_node';

  var myobj = { name: "anitha", address: "coimbatore" };

 var db = colection.connect_mongo;
 db.createCollection("customers", function(err,res) {
   if (err)
     throw err;
   console.log("Table created!");

   });
   db.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 record inserted");
  db.close();


});*/



colection.connectToServer( function( err ) {
  // start the rest of your app here
var db = colection.getDb();
db.createCollection('users');

//db.collection( 'users' ).find();
db.close();
});
