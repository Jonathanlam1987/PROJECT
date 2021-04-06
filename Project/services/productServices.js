const {  Restaurants } = require("../models/products.js");

function createNewItemToMongo(fields) {
  return new Restaurants(fields).save();
}

function listItems() {
    return Restaurants.find().setOptions({ lean: true }).exec();
}

module.exports = {
  createNewItemToMongo,
  listItems,
};
