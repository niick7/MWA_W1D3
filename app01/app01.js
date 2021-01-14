const express = require("express");
const app = express();
const routes = require("./api/routes");
require("./db/connection.js").openConnection();

app.set("port", 3000);

app.use("/", routes);

var server = app.listen(app.get("port"), function(req, res) {
  var port = server.address().port;
  console.log("Listening to port " + port);
})