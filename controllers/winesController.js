const db = require("../models");

// Defining methods for the winesController
module.exports = {

  findAll: function(req, res) {
    db.Wine
      .find()
      .limit(25)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Wine
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
