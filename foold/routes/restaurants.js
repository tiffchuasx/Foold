import express from 'express';
import restaurantController from '../controllers/restaurant_controller';
const router = express.Router();

// Call functions here

/* GET index page. */
router.get('/', restaurantController.getAll);
router.get('/:id', restaurantController.getOne);

// getAll - restaurant names for landing page

// Update restaurant

// delete restauarant

module.exports = router;
