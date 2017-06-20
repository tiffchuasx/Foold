// embed reviews in here
// name, email, password
// profile: {profile: { user.profile.name
//user.profile.picture
//var reviewSchema = require('./model/reviews')

var user = new mongoose.Schema({
  profile: {
    name: String,
    picture: String,
    gender: String
  },
  tokens: [],
  facebook: String,
  restaurants: [] //mongoose method to limit to 5
})

// reviews: array[ review schema] <- Embedded object
// top five restaurants: store restaurant by ID
