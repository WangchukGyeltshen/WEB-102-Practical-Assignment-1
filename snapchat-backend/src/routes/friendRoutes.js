const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const prisma = require('../prismaClient');

// POST /api/friends/request
router.post('/request', authenticateToken, async (req, res) => {
  // Always use req.user.userId for the authenticated user's id
  const fromUserId = req.user.userId;
  const { toUserId } = req.body;
  if (!toUserId || fromUserId === toUserId) return res.status(400).json({ error: 'Invalid user' });

  // Check if already friends
  const alreadyFriends = await prisma.friendship.findFirst({
    where: {
      OR: [
        { friendAId: fromUserId, friendBId: toUserId },
        { friendAId: toUserId, friendBId: fromUserId }
      ]
    }
  });
  if (alreadyFriends) return res.status(400).json({ error: 'Already friends' });

  // Check if request already sent (either direction, pending)
  const existing = await prisma.friendRequest.findFirst({
    where: {
      OR: [
        { fromUserId, toUserId, status: 'pending' },
        { fromUserId: toUserId, toUserId: fromUserId, status: 'pending' }
      ]
    }
  });
  if (existing) return res.status(400).json({ error: 'Request already sent' });

  // Check if user exists
  const toUser = await prisma.user.findUnique({ where: { id: toUserId } });
  if (!toUser) return res.status(404).json({ error: 'User not found' });

  // Only use fromUserId and toUserId in the data object
  await prisma.friendRequest.create({
    data: { fromUserId, toUserId }
  });
  res.json({ ok: true });
});

// GET /api/friends/requests
router.get('/requests', authenticateToken, async (req, res) => {
  // Use req.user.userId for consistency
  const userId = req.user.userId;
  const requests = await prisma.friendRequest.findMany({
    where: { toUserId: userId, status: 'pending' },
    include: { fromUser: { select: { id: true, username: true, email: true } } }
  });
  res.json({ requests });
});

// POST /api/friends/respond
router.post('/respond', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const { requestId, accept } = req.body;
  const request = await prisma.friendRequest.findUnique({ where: { id: requestId } });
  if (!request || request.toUserId !== userId || request.status !== 'pending') {
    return res.status(400).json({ error: 'Invalid request' });
  }
  if (accept) {
    // Create friendship
    await prisma.friendship.create({
      data: { friendAId: request.fromUserId, friendBId: userId }
    });
    await prisma.friendRequest.update({ where: { id: requestId }, data: { status: 'accepted' } });
  } else {
    await prisma.friendRequest.update({ where: { id: requestId }, data: { status: 'rejected' } });
  }
  res.json({ ok: true });
});

module.exports = router;
