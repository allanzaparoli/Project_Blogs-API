const express = require('express');
const postController = require('../controllers/post.controller');
const authenticateToken = require('../middlewares/validationToken');
const { validationPost } = require('../middlewares/validationPost');

const router = express.Router();

router.post('/', validationPost, authenticateToken, postController.newPost);
module.exports = router;