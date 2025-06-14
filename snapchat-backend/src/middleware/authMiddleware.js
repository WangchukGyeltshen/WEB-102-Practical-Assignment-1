const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret';
console.log('JWT_SECRET used for verification:', JWT_SECRET);

function authenticateToken(req, res, next) {
  // Accept token from Authorization header or from query for browser testing
  let token;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.query && req.query.token) {
    // Allow ?token=... for manual browser testing
    token = req.query.token;
  }

  if (!token) {
    console.error('No token provided. Headers:', req.headers, 'Query:', req.query);
    return res.status(401).json({ error: 'No Authorization header or token provided' });
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