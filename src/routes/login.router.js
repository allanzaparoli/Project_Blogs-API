const express = require('express');
const loginController = require('../controllers/login.controller');
const validateEmailPassword = require('../middlewares/validationEmailPassword');

const router = express.Router();

router.post('/', validateEmailPassword, loginController.login);

module.exports = router;
