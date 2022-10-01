const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const authenticateToken = require('../middlewares/validationToken');

const router = express.Router();

router.post('/', authenticateToken, categoriesController.categories);

router.get('/', authenticateToken, categoriesController.getCategories);

module.exports = router;