import express from 'express';
const router = express.Router();
const reviewController = require('../controllers/review_controller');

// List Review on front page
router.get('/listReview', reviewController.getAll);

// Post review to database
router.post('/:id', reviewController.createReview);

module.exports = router;
