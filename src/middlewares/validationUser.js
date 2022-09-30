// requisito 4
const { User } = require('../models');

const validationUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
     return res.status(400)
     .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!email.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const emailExist = async (req, res, next) => {
  const { email } = req.body;

const result = await User.findOne({ where: { email } });
    if (result) {
      return res.status(409).json({ message: 'User already registered' });
    }
  next();
};

module.exports = { validationUser, emailExist };