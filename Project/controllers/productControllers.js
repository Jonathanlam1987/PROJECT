const { listItems } = require("../services/productService.js");
const { cuisineVar } = require('../models/products.js')

async function renderProductsList(req, res) {
  const items = await listItems();
  
  const itemsToDisplay = req.query.cuisine
  ? items.filter((item) => item.cuisine === req.query.cuisine)
  : items;

  res.render('home', { items: itemsToDisplay, cuisineVar});

}




module.exports = {
  renderProductsList, 
}
