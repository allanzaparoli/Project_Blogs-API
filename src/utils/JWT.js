const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'blogsAPI';

const generateToken = ({ id, email }) => {
const payload = {
id,
email,
};

const jwtConfig = {
expiresIn: '365d',
algorithm: 'HS256',
};

const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);

return token;
};

module.exports = generateToken;