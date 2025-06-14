const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const snapRoutes = require('./routes/snapRoutes');
const storyRoutes = require('./routes/storyRoutes');
const spotlightRoutes = require('./routes/spotlightRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');
const friendRoutes = require('./routes/friendRoutes');
const path = require('path');
const { authenticateToken } = require('./middleware/authMiddleware');
const authController = require('./controllers/authController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/snaps', snapRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/spotlight', spotlightRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/friends', friendRoutes);
app.use('/uploads/videos', express.static(path.join(__dirname, '../uploads/videos')));

app.get('/', (req, res) => res.send('Backend is running!'));
app.get('/api/auth/me', authenticateToken, authController.me);

// --- SOCKET.IO SETUP ---
let io;
function attachSocket(server) {
  const { Server } = require('socket.io');
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    // Join a room for a chat between two users (room name: sorted user ids)
    socket.on('joinRoom', ({ userId, otherUserId }) => {
      const room = [userId, otherUserId].sort().join('-');
      socket.join(room);
    });

    // Listen for chat messages and broadcast to the room
    socket.on('chatMessage', ({ from, to, message }) => {
      const room = [from, to].sort().join('-');
      io.to(room).emit('chatMessage', { from, message, timestamp: new Date() });
    });

    // Optionally: handle disconnects, typing, etc.
  });
}

module.exports = { app, attachSocket };