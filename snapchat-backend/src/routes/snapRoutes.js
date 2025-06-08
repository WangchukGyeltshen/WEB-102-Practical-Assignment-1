const express = require('express');
const router = express.Router();
const snapController = require('../controllers/snapController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, snapController.sendSnap);
router.get('/', authenticateToken, snapController.getSnaps);

module.exports = router;