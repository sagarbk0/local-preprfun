const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
  title: String,
  body: String,
  business: String
})

const Promotion = mongoose.model('Promotion', PromotionSchema);

module.exports = Promotion

