const {  Restaurants } = require("../models/products.js");

function createNewItemToMongo(fields) {
  return new Restaurants(fields).save();
}

function listItems() {
    return Restaurants.find().setOptions({ lean: true }).exec();
}


function cityVancouver() {
  return Restaurants.find({ 'city': 'Vancouver' })
}



module.exports = {
  createNewItemToMongo,
  listItems,
  cityVancouver
};
