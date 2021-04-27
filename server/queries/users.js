const db = require('../db/index');

const createUser = async (req, res, next) => {
    let videoURL = `http://localhost:3001/${req.file.path.replace('public/', '')}`;

    let insertData = {
        id: req.body.id,
        email: req.body.email,
        username: req.body.username,
        profile_img: videoURL
    }

    try {
        await db.none (
            'INSERT INTO users(id, email, username, profile_img) VALUES(${id}, ${email}, ${username}, ${profile_img})', insertData
        );
        res.json({
            message: 'New user created.'
        })
    } catch (err) {
        next(err)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await db.any('SELECT * FROM users');
        res.json({
            users,
            message: 'Retrieved all users'
        })
    } catch (err) {
        next(err)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const user = await db.any('SELECT * FROM users WHERE id=$1', [ req.params.id ])
        res.json({
            user,
            message: 'Retrieved user.'
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById
}