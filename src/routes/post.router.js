const express = require('express');
const postController = require('../controllers/post.controller');
const authenticateToken = require('../middlewares/validationToken');

const router = express.Router();

// router.post('/', authenticateToken, postController.newPost);

module.exports = router;