const express = require('express');
const router = express.Router();
const spotlightController = require('../controllers/spotlightController');
const { authenticateToken } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer config for video uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../../uploads/videos');
    // Ensure the directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, 'spotlight_' + Date.now() + ext);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) cb(null, true);
  else cb(new Error('Only video files are allowed!'), false);
};
const upload = multer({ storage, fileFilter });

// Static routes FIRST
router.post('/upload', authenticateToken, upload.single('video'), spotlightController.uploadSpotlightVideo);
router.get('/test', (req, res) => res.json({ ok: true, msg: 'Spotlight router working' }));
router.get('/public', spotlightController.getSpotlights);

// Authenticated routes AFTER static
router.post('/', authenticateToken, spotlightController.postSpotlight);
router.get('/', authenticateToken, spotlightController.getSpotlights);

// If you have a dynamic route, put it LAST
// router.get('/:id', ...);

module.exports = router;