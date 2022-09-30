const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
const result = await User.findOne({
attributes: ['email', 'password'],
where: { email, password },
});
console.log(User);
const emailExist = await User.findOne({ where: { email } });
  if (!emailExist) {
    return { error: 400, message: 'Invalid fields' };
  }

const token = generateToken(result.dataValues);
return { token };
};

module.exports = {
login,
};