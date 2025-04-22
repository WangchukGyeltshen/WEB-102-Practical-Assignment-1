require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const { router: authRoutes } = require('./routes/auth');
const snapRoutes = require('./routes/snaps');
const friendRoutes = require('./routes/friends');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/snaps', snapRoutes);
app.use('/api/friends', friendRoutes);

app.listen(5000, () => console.log('🚀 Backend running on http://localhost:5000'));
