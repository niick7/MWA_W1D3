const MongoClient= require("mongodb").MongoClient;
const dbName = "GamesDB";
const dbUrl = "mongodb://localhost:27017/" + dbName;
let _connection= null;

const open = function() {
  MongoClient.connect(dbUrl, {useUnifiedTopology: true}, function(err, client) {
    if(err) {
      console.log("DB connection failed");
      return;
    }
    _connection = client.db(dbName);
  });
};

const get = function() {
  return _connection;
};

module.exports= {
  openConnection : open,
  get : get
};