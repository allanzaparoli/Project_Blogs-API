const express = require('express');
const userController = require('../controllers/user.controller');
const { validationUser, emailExist } = require('../middlewares/validationUser');

const router = express.Router();

router.post('/', validationUser, emailExist, userController.user);

module.exports = router;