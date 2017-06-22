const Restaurant = require('../models/restaurants');

exports.getList = (req, res) => {
  Restaurant.find({}, (err, restaurants) => {
    if (err) return res.json({ message: `Could not find restaurant b/c: ${err}` });

    res.render('index', {
      title: 'Foold',
      list: restaurants
    });
  });
};
