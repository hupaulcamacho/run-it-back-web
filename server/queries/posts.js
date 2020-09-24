const db = require('../db/index');

const createPost = async (req, res, next) => {
    try {
        await db.none (
            'INSERT INTO posts(poster_id, post_body, deleted) VALUES(${poster_id}, ${post_body}, ${deleted})',
            req.body
        );
        res.json({
            message: 'Post created.'
        })
    } catch (err) {
        next(err)
    }
}

const deletePost = async (req, res, next) => {
    try {
        await db.none (
            'UPDATE posts SET deleted=${deleted} WHERE poster_id=${poster_id}',
            req.body
        )
        res.json({
            message:'Post deleted.'
        })
    } catch (err) {
        next(err)
    }
}

const restorePost = async (req, res, next) => {
    try {
        await db.none (
            'UPDATE posts SET deleted=${deleted} WHERE poster_id=${poster_id}',
            req.body
        )
        res.json({
            message:'Post restored.'
        })
    } catch (err) {
        next(err)
    }
}

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await db.any('SELECT * FROM posts');
        res.json({
            posts,
            message: 'Retrieved all posts.'
        })
    } catch (err) {
        next(err)
    }
}

const getPostsByUser = async (req, res, next) => {
    try {
        const posts = await db.any('SELECT * FROM posts WHERE poster_id=${poster_id}', req.body);
        res.json({
            posts,
            message: 'Retrieved all posts'
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createPost,
    deletePost,
    restorePost,
    getAllPosts,
    getPostsByUser
}