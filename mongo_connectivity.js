var MongoClient = require('mongodb');

var _db;

module.exports = {

  connectToServer: function( ) {
    MongoClient.connect( "mongodb://localhost:27017/db_node", function( err, db ) {
      console.log('connection success');
      _db = db;

      //return callback( err );
    });
  },

  getDb: function() {
    return _db;
  }

};
