const Review = require('../models/reviews');

// Get all reviews (cRud)
exports.getAll = (req, res) => {

  Review.find({}, (err, review) => {
    if (err) res.json({ message: 'No reviews available' });
    res.json(review);
  });
};

// Create review (Crud)
exports.createReview = (req, res, next) => {
  let ratingArray = [];
  ratingArray.push(req.body.ratingValue);
  ratingArray.push(req.body.ratingService);
  ratingArray.push(req.body.ratingAmbience);
  Review.create({
    user_id: req.body.user_id,
    restaurant_id: req.body.restaurant_id,
    amount_spent: req.body.amount_spent,
    party_size: req.body.party_size,
    rating: ratingArray,
    comments: req.body.comments
  },
  (err, output) => {
    if (err) console.log(err);
    res.redirect('/');
  });
};

// Delete review (cruD)
// exports.postDeleteReview = (req, res, next) => {
//   Review.remove( { _id: req.review.id }, (err) => {
//     if (err) { return next(err); }
//     req.flash('info', { msg: 'This review has been deleted.' });
//   });
// };

// Edit review (crUd)
exports.update = ( newReview ) => {
  const id = req.params.id;
  // If review id matches new review id, add to array
};
