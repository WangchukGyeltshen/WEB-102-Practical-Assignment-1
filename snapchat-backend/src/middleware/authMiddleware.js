const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret';
console.log('JWT_SECRET used for verification:', JWT_SECRET);

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    console.error('No Authorization header. Headers:', req.headers);
    return res.status(401).json({ error: 'No Authorization header' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    console.error('No token found in Authorization header:', authHeader);
    return res.status(401).json({ error: 'No token found in Authorization header' });
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('JWT verification failed:', err);
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    // Debug: log the decoded user object
    console.log('Decoded JWT user:', user);
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };