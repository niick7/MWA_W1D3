const dbConnection = require("../../db/connection");

module.exports.games = function(req, res) {
  var db = dbConnection.get();
  var games = db.collection("games");
  var count = 3;

  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
    if(count > 7) {
      count = 7;
    }
  }

  games.find().limit(count).toArray(function(err, docs) {
    res.status(200).json(docs);
  });
};
