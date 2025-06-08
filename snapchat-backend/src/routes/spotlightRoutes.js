const express = require('express');
const router = express.Router();
const spotlightController = require('../controllers/spotlightController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, spotlightController.postSpotlight);
router.get('/', authenticateToken, spotlightController.getSpotlights);

module.exports = router;