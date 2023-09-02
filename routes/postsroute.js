const express = require('express')
const router = express.Router()

const { createPost, updatePost, deletePost, getPost } = require('../controllers/postcontroller')
const isLoggedin = require('../middleware/isLoggedin')

router.route('/post/create').post(isLoggedin, createPost)

router.route('/post/update/:id').put(isLoggedin, updatePost)

router.route('/post/delete/:id').delete(isLoggedin, deletePost)

router.route('/post/get').get(getPost)



module.exports = router