const express = require('express');
const multer = require('multer');
const prisma = require('../prisma/client');
const { requireAuth } = require('./auth');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // local storage for now

// Upload snap
router.post('/upload', requireAuth, upload.single('snap'), async (req, res) => {
  const snap = await prisma.snap.create({
    data: {
      mediaUrl: /uploads/${req.file.filename},
      userId: req.user.userId
    }
  });
  res.json(snap);
});

// Get snaps (from self + friends)
router.get('/', requireAuth, async (req, res) => {
  const friends = await prisma.friend.findMany({
    where: { userId: req.user.userId, accepted: true },
    select: { friendId: true }
  });
  const friendIds = friends.map(f => f.friendId);

  const snaps = await prisma.snap.findMany({
    where: {
      userId: {
        in: [req.user.userId, ...friendIds]
      }
    },
    orderBy: { createdAt: 'desc' },
    include: { user: true }
  });

  res.json(snaps);
});

module.exports = router;