const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const { authenticateToken } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Multer config for video uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/videos'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, 'story_' + Date.now() + ext);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) cb(null, true);
  else cb(new Error('Only video files are allowed!'), false);
};
const upload = multer({ storage, fileFilter });

router.post('/', authenticateToken, storyController.postStory);
router.get('/:userId', authenticateToken, storyController.getStories);

// New: Upload video for story
router.post('/upload', authenticateToken, upload.single('video'), storyController.uploadStoryVideo);

module.exports = router;