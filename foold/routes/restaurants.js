import express from 'express';
import restaurantController from '../controllers/restaurant_controller';
import reviewController from '../controllers/review_controller';
const router = express.Router();

// Call functions here

// GET restaurants page.
router.get('/', restaurantController.getAll);

// Get restaurant according to ID
router.get('/:id', restaurantController.getOne);

// Pushing review to database
router.get('/createReview', reviewController.createReview);

// List review on frontend
router.get('/listReview', reviewController.listReview);

// Update restaurant

// delete restauarant

module.exports = router;
