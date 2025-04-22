const express = require('express');
const prisma = require('../prisma/client');
const { requireAuth } = require('./auth');
const router = express.Router();

// Send request
router.post('/add', requireAuth, async (req, res) => {
  const { friendId } = req.body;
  const friend = await prisma.friend.create({
    data: {
      userId: req.user.userId,
      friendId,
      accepted: false
    }
  });
  res.json(friend);
});

// Accept request
router.post('/accept', requireAuth, async (req, res) => {
  const { requestId } = req.body;
  const accepted = await prisma.friend.update({
    where: { id: requestId },
    data: { accepted: true }
  });
  res.json(accepted);
});

// List friends
router.get('/', requireAuth, async (req, res) => {
  const friends = await prisma.friend.findMany({
    where: { userId: req.user.userId, accepted: true },
    include: { friend: true }
  });
  res.json(friends.map(f => f.friend));
});

module.exports = router;