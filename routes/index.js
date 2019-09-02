const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { Wine } = require("../models");

// API Routes
router.use("/api", apiRoutes);

// Temporary index page until we have React working
router.get("/", function (req, res) {
  Wine.find({})
    .then((wines) => {
      var html = "<ol>";
      for (var i=0; i<wines.length; i++) {
        html += "<li>" + wines[i].name + "</li>";
      }
      html += "</ol>"
      res.send(html);
    })
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
