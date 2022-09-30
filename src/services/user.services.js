const { User } = require('../models');
const generateToken = require('../utils/JWT');

const user = async ({ email, password, displayName }) => {
const result = await User.create({ email, password, displayName });

const token = generateToken(result.dataValues);
return { token };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
user,
getAll,
};