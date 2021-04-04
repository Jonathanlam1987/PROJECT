const mongoose = require('mongoose');
const cuid = require('cuid');



const productSchema = mongoose.Schema({
    _id: { type: String, default: cuid },
    name: String,
    price: {
      type: String,
      index: true,
    }, 
    city: {
      type: String,
      index: true,
    },
    imageUrl: String,
    category: {
      type: String,
      index: true,
    },
});


module.exports = mongoose.model('Products', productSchema);