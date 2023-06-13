const express = require('express');
const router = express.Router();
const POSTS = require('../model/postModel')
const postsControllers = require('../controller/postsController')

// create posts routes
router.post('/create', postsControllers.create_posts)

// Get all posts route
router.get('/allPosts', postsControllers.get_All_Posts)


module.exports = router