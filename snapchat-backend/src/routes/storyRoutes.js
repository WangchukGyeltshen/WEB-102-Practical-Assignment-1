const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, storyController.postStory);
router.get('/:userId', authenticateToken, storyController.getStories);

module.exports = router;