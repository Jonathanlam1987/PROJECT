const { listItems, cityVancouver } = require("../services/productService.js");
const { cuisineVar, cityVar, priceVar } = require('../data/data.js')

async function renderProductsList(req, res, next) {
  try {
    const items = await listItems();

    const itemsToDisplay = req.query.city
      ? items.filter((item) => item.city === req.query.city)
      : items;

    console.log(`Username: ${req.username}`);
    // if (req.username) {
    //   res.render("home", {
    //     layout: "logged-in",
    //     items: itemsToDisplay,
    //     productCategories,
    //   });
    // } else {
    res.render("home", {
      layouts: req.layouts,
      items: itemsToDisplay,
      cityVar,
    });
  } catch (error) {
    next(error);
  }
}




async function renderVancouver(req, res, next) {
  try {
    const items = await cityVancouver();

    const itemsToDisplay = req.query.city
      ? items.filter((item) => item.city === req.query.city)
      : items;

    console.log(`Username: ${req.username}`);
    // if (req.username) {
    //   res.render("home", {
    //     layout: "logged-in",
    //     items: itemsToDisplay,
    //     productCategories,
    //   });
    // } else {
    res.render("home", {
      layouts: req.layouts,
      items: itemsToDisplay,
      cityVar,
    });
  } catch (error) {
    next(error);
  }
}













module.exports = {
  renderProductsList,
  renderVancouver
};