const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'blogsAPI';

const generateToken = ({ email, password }) => {
const payload = {
email,
password,
};

const jwtConfig = {
expiresIn: '15m',
algorithm: 'HS256',
};

const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);

return token;
};

module.exports = generateToken;