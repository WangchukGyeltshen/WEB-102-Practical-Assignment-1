const prisma = require('../prismaClient');

exports.sendSnap = async (req, res) => {
  const { receiverId, mediaUrl } = req.body;
  const senderId = req.user.userId;
  try {
    const snap = await prisma.snap.create({
      data: { senderId, receiverId, mediaUrl }
    });
    res.json(snap);
  } catch (err) {
    res.status(400).json({ error: 'Could not send snap' });
  }
};

exports.getSnaps = async (req, res) => {
  const userId = req.user.userId;
  try {
    const snaps = await prisma.snap.findMany({
      where: { receiverId: userId }
    });
    res.json(snaps);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch snaps' });
  }
};