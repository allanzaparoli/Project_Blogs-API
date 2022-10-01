const express = require('express');
const userController = require('../controllers/user.controller');
const { validationUser, emailExist } = require('../middlewares/validationUser');
const authenticateToken = require('../middlewares/validationToken');

const router = express.Router();

router.post('/', validationUser, emailExist, userController.user);

router.get('/', authenticateToken, userController.getAll);

router.get('/:id', authenticateToken, userController.getById);

module.exports = router;