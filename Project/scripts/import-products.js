
const  mongoose  = require('../db')
const { createNewItemToMongo } = require('../services/productServices.js')

const restaurants = require('../data.json')

(async function () {
    for ( restaurants of restaurants) {
        await createNewItemToMongo(restaurants);
    }

    mongoose.disconnect();
})();


