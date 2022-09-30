const userService = require('../services/user.services');

const user = async (req, res) => {
  const { displayName, email, password } = req.body;
    const result = await userService.user({ displayName, email, password });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    return res.status(201).json(result);
  };

module.exports = {
  user,
};