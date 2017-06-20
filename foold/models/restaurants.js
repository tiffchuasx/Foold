import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  address_line1: String,
  address_line2: String,
  contact: String
});

const Restaurants = mongoose.model('Restaurants', restaurantSchema);

module.exports = Restaurants;
