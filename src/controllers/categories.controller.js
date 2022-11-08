const categoriesService = require('../services/categories.services');

const categories = async (req, res, next) => {
  try {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const result = await categoriesService.categories({ name });
    res.status(201).json(result);
  } catch (e) {
    res.status(404).json({ message: 'Erro no categories' });
    next();
  }
  };

  const getCategories = async (_req, res, next) => {
    try {
      const result = await categoriesService.getCategories();
      return res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: 'Erro no getAll' });
      next();
    }
  };

  module.exports = {
    categories,
    getCategories,
  };