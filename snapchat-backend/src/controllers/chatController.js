const prisma = require('../prismaClient');

exports.sendChat = async (req, res) => {
  const { receiverId, message } = req.body;
  const senderId = req.user.userId;
  try {
    const chat = await prisma.chat.create({
      data: { senderId, receiverId, message }
    });
    res.json(chat);
  } catch (err) {
    res.status(400).json({ error: 'Could not send chat' });
  }
};

exports.getChats = async (req, res) => {
  const userId = req.user.userId;
  const { withUserId } = req.query;
  try {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: Number(withUserId) },
          { senderId: Number(withUserId), receiverId: userId }
        ]
      },
      orderBy: { createdAt: 'asc' }
    });
    res.json(chats);
  } catch (err) {
    res.status(400).json({ error: 'Could not fetch chats' });
  }
};