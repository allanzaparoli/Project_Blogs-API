const userService = require('../services/user.services');

const user = async (req, res) => {
  const { displayName, email, password } = req.body;
    const result = await userService.user({ displayName, email, password });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    return res.status(201).json(result);
  };

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Estou aqui' });
  }
};

module.exports = {
  user,
  getAll,
};