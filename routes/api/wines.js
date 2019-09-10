const router = require("express").Router();
const winesController = require("../../controllers/winesController");

// Matches with "/api/wines"
router.route("/")
  .get(winesController.findAll);
  
module.exports = router;
