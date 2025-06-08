const prisma = require('../prismaClient');

exports.postSpotlight = async (req, res) => {
  const { mediaUrl } = req.body;
  const userId = req.user.userId;
  try {
    const spotlight = await prisma.spotlight.create({
      data: { userId, mediaUrl }
    });
    res.json(spotlight);
  } catch (err) {
    res.status(400).json({ error: 'Could not post spotlight' });
  }
};

exports.getSpotlights = async (req, res) => {
  try {
    const spotlights = await prisma.spotlight.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(spotlights);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch spotlights' });
  }
};