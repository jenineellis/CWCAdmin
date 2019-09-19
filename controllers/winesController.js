const db = require("../models");

function getWinesFilter(req) {
  var dbFilter = {};

  // req.query contains all the query string parameters;
  if (req.query.color)
    dbFilter.color = req.query.color;
  if (req.query.region)
    dbFilter.nested_region = req.query.region;

  return dbFilter;
}


// Defining methods for the winesController
module.exports = {

  findAll: function(req, res) {
    var filter = getWinesFilter(req);

    db.Wine
      .find(filter)
      .limit(25)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Wine
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findRegions: function(req, res) {
    var filter = getWinesFilter(req);

    db.Wine
      .aggregate([
        { $match: filter }, 
        { $group: {_id: "$nested_region", count: { $sum: 1 } } }, 
        { $sort: { count: -1 } } 
      ])
      .then(regions => res.json(regions))
      .catch(err => res.status(500).json(err));
  }

};
