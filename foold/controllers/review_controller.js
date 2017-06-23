const Review = require('../models/reviews');
// Connect to database so we can push the data
// const db = mongoose.connection;
// mongoose.connect('mongodb://localhost/Mandela_Diaries/data');

// Get all reviews (cRud)
exports.getAll = (req, res) => {

  Review.find({}, (err, review) => {
    if (err) res.json({ message: 'No reviews available' });
    res.json(review);
  });
};

// Create review (Crud)
exports.createReview = (req, res, next) => {
  Review.create({
    review_name: req.body.review_name,
    restaurant_id: req.param.id,
    amount_spent: req.body.amount_spent,
    party_size: req.body.party_size,
    rating: req.body.rating,
    comments: req.body.comments
  },
  (err, output) => {
    if (err) console.log(err);
    console.log('submitted review successfully')
    res.redirect('/')
  });
};

// Fetch review from backend
exports.listReview = (req, res, next) => {
  Review.find({}, (err, review) => {
    if (err) {
      console.log(err);
    }
    console.log(review);
    res.json(review);
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
