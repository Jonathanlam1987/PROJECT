const { Restautant } = require("../models/products.js");

function createNewItemToMongo(fields) {
  return new Restautant(fields).save();
}

function listItems() {
  return Restautant.find().setOptions({ lean: true }).exec();
}

module.exports = {
  createNewItemToMongo,
  listItems,
};
