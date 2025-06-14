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
    // Prepend server URL to mediaUrl
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const spotlightsWithUrl = spotlights.map(s => ({
      ...s,
      mediaUrl: s.mediaUrl.startsWith('http')
        ? s.mediaUrl
        : baseUrl + s.mediaUrl
    }));
    res.json(spotlightsWithUrl);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch spotlights' });
  }
};

exports.uploadSpotlightVideo = async (req, res) => {
  // Debug: log req.user before accessing userId
  console.log('uploadSpotlightVideo req.user:', req.user);
  if (!req.file) return res.status(400).json({ error: 'No video file uploaded' });
  if (!req.user || !req.user.userId) {
    return res.status(401).json({ error: 'Unauthorized: user not found in request. Make sure you are sending a valid token.' });
  }
  const userId = req.user.userId;
  const mediaUrl = `/uploads/videos/${req.file.filename}`;
  try {
    const spotlight = await prisma.spotlight.create({
      data: { userId, mediaUrl }
    });
    // Prepend server URL to mediaUrl in response
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.json({
      ...spotlight,
      mediaUrl: baseUrl + spotlight.mediaUrl
    });
  } catch (err) {
    res.status(400).json({ error: 'Could not upload spotlight video' });
  }
};