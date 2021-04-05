
const  mongoose  = require('../db')
const { createNewItemToMongo } = require('../services/productServices.js')

const restaurants = require('../data.json')

(async function () {
    for ( restaurant of restaurants) {
        await createNewItemToMongo(restaurant);
    }

    mongoose.disconnect();
})();