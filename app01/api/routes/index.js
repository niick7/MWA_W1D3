const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games_controller.js");

router.route("/games").get(gamesController.games);

module.exports = router;