import express from 'express';
import restaurantController from '../controllers/restaurant_controller';
import reviewController from '../controllers/review_controller';
const router = express.Router();

// Call functions here

/* GET index page. */
router.get('/', restaurantController.getAll);
router.get('/:id', restaurantController.getOne);

// Post reviews
router.post('/postReview', reviewController.createReview);

// Get reviews from database
router.get('/createReview', reviewController.createReview);

// Update restaurant

// delete restauarant

module.exports = router;
