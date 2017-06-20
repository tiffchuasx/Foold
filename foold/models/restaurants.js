import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  address: String,
  contact: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
