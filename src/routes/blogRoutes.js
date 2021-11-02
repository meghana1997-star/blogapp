const express = require('express');
const blogController = require('../controllers/blogController');
const router = new express.Router();


router.post('/', blogController.blog_create_post);

router.get('/', blogController.blog_create_get);

router.patch('/:id', blogController.blog_update);

router.delete('/:id', blogController.blog_delete);

module.exports = router;