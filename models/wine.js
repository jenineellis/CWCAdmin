const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  media_type_id: String,
  base_url: String,
  public_id: String,
  height: Number,
  width: Number,
  alt_text: String
});


const wineSchema = new Schema({
  name: String,
  region: String,
  nested_region: String,
  varietal: String,
  alcohol_percent: Number,
  vintage: Number,
  price: Number,
  vineyard: String,
  stock: Number,
  shortDescription: String,
  longDescription: String,
  pictures: [pictureSchema]
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
