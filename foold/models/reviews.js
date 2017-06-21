import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user_id: String,
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  amount_spent: Number,
  party_size: Number,
  rating: [],
  comments: String
});

const Reviews = mongoose.model('Reviews', reviewSchema, 'reviews');

module.exports = Reviews;
