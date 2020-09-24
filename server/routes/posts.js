const posts = require('express').Router();
const { createPost, deletePost, getAllPosts, restorePost, getPostsByUser }  = require('../queries/posts');

posts.get('/', getAllPosts);
posts.get('/user', getPostsByUser);
posts.post('/', createPost);
posts.patch('/delete', deletePost);
posts.patch('/restore', restorePost);


module.exports = posts


