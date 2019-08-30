const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: String,
  region: String,
  nested_region: String,
  varietal: String,
  alcohol_percent: Number,
  vintage: Number,
  price: Number,
  vineyard: String,
  stock: Number
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
