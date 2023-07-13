const { Schema, model } = require('mongoose');
const Product = require('./Product')

const cartSchema = new Schema({
  product: {
    type: Product.schema,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  }
});

module.exports = cartSchema;