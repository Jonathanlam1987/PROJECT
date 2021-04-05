const { listItems } = require("../services/productServices.js");


async function renderProductsList(req, res, next) {
  try {
    const items = await listItems();

    const itemsToDisplay = req.query.cuisine
      ? items.filter((item) => item.cuisine === req.query.cuisine)
      : items;

    console.log(`Username: ${req.username}`);
    res.render("home", {
      layout: req.layout,
      items: itemsToDisplay,
      itemCuisine,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  renderProductsList,
};
