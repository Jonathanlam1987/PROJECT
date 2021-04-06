const mongoose = require('../db.js');
const Schema = mongoose.Schema;
const cuid = require('cuid');

const { priceVar, cityVar, cuisineVar } = require('../data/data.js')


const restaurantSchema = new Schema({
    _id: { type: String, default: cuid },
    name: String,
    price: {
      type: String,
      index: true,
      enum: priceVar,
    }, 
    city: {
      type: String,
      index: true,
      enum: cityVar,
    },
    imageUrl: String,
    description: String,
    cuisine: {
      type: String,
      index: true,
      enum: cuisineVar,
    
    },
});


const Restaurants = mongoose.model('Restaurants', restaurantSchema);
module.exports = {
  Restaurants
}