const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, chatController.sendChat);
router.get('/', authenticateToken, chatController.getChats);

module.exports = router;