// models/ProductModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
  // For example, you might want to add an image field, stock quantity, etc.
  image: String,
  stockQuantity: {
    type: Number,
    default: 0,
  },
  // You can add other fields based on your project requirements
});

module.exports = mongoose.model('Product', productSchema);
