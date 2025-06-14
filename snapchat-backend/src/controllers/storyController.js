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
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const storiesWithUrl = stories.map(s => ({
      ...s,
      mediaUrl: s.mediaUrl.startsWith('http')
        ? s.mediaUrl
        : baseUrl + s.mediaUrl
    }));
    res.json(storiesWithUrl);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch stories' });
  }
};

exports.uploadStoryVideo = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No video file uploaded' });
  const userId = req.user.userId;
  const mediaUrl = `/uploads/videos/${req.file.filename}`;
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  try {
    const story = await prisma.story.create({
      data: { userId, mediaUrl, expiresAt }
    });
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.json({
      ...story,
      mediaUrl: baseUrl + story.mediaUrl
    });
  } catch (err) {
    res.status(400).json({ error: 'Could not upload story video' });
  }
};

exports.getPublicStories = async (req, res) => {
  try {
    const stories = await prisma.story.findMany({
      where: { expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' }
    });
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const storiesWithUrl = stories.map(s => ({
      ...s,
      mediaUrl: s.mediaUrl.startsWith('http')
        ? s.mediaUrl
        : baseUrl + s.mediaUrl
    }));
    res.json(storiesWithUrl);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch public stories' });
  }
};