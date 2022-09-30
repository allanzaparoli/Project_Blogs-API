const jwt = require('jsonwebtoken');
require('dotenv/config');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'blogsAPI';

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
  return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    jwt.verify(token, TOKEN_SECRET_KEY);
} catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
next();
};

module.exports = authenticateToken;