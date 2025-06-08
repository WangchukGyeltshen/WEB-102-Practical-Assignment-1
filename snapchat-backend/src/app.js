const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const snapRoutes = require('./routes/snapRoutes');
const storyRoutes = require('./routes/storyRoutes');
const spotlightRoutes = require('./routes/spotlightRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/snaps', snapRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/spotlight', spotlightRoutes);
app.use('/api/chats', chatRoutes);

app.get('/', (req, res) => res.send('Backend is running!'));

module.exports = app;