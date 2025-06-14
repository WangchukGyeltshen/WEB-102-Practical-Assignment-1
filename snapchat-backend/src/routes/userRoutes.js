const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const prisma = require('../prismaClient');

// GET /api/users/search?query=...
router.get('/search', authenticateToken, async (req, res) => {
  const query = req.query.query?.trim();
  if (!query) return res.json({ users: [] });
  const currentUserId = req.user.id;
  const users = await prisma.user.findMany({
    where: {
      OR: [
        { username: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } }
      ],
      NOT: { id: currentUserId }
    },
    select: {
      id: true,
      username: true,
      email: true
      // avatarUrl: true // add if you have this field
    },
    take: 10
  });
  res.json({ users });
});

module.exports = router;
