const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret';

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { username, email, password: hashed }
    });
    res.json({ message: 'Signup successful', user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(400).json({ message: 'User already exists' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // Debug log
  console.log('Login attempt:', { email, password });
  const user = await prisma.user.findUnique({ where: { email } });
  console.log('User found:', user);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  console.log('Password valid:', valid);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ message: 'Login successful', token });
};