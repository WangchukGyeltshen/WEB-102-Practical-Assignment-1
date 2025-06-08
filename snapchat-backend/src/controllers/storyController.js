const prisma = require('../prismaClient');

exports.postStory = async (req, res) => {
  const { mediaUrl } = req.body;
  const userId = req.user.userId;
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
  try {
    const story = await prisma.story.create({
      data: { userId, mediaUrl, expiresAt }
    });
    res.json(story);
  } catch (err) {
    res.status(400).json({ error: 'Could not post story' });
  }
};

exports.getStories = async (req, res) => {
  const { userId } = req.params;
  try {
    const stories = await prisma.story.findMany({
      where: { userId: Number(userId), expiresAt: { gt: new Date() } }
    });
    res.json(stories);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch stories' });
  }
};