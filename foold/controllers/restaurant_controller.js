const Restaurant = require('../models/restaurants');

// Functions in controller do not do anything.
// Have to write in the route as well so that the browser will do something.

// Get all restaurants (cRud)
exports.getAll = (req, res) => {

  Restaurant.find({}, (err, restaurant) => {
    if (err) res.json({ message: 'Could not find restaurant' });
    res.json(restaurant);
  });
};

/*
 * Show restaurant according to ID name
 */
exports.getOne = (req, res) => {
  const id = req.params.id;
  Restaurant.findById({ _id: id }, (err, restaurant) => {
    if (err) res.json({ message: `Could not find restaurant b/c: ${err}` });
    // If database is empty, will return restaurant1.
  // 'Restaurants' is the pug page we want to navigate to
    res.render('restaurants', { restaurant: restaurant });
  });
};
