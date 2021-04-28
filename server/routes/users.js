const users = require('express').Router();
const multer = require('multer');
const { createUser, getAllUsers, getUserById } = require('../queries/users');
const { checkFirebaseToken } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)  => {
        let name = file.originalname;
        cb(null, name)
    }
})

const upload = multer({ storage: storage})

users.post('/', upload.single('file'), createUser);
users.get('/', /* checkFirebaseToken,*/ getAllUsers)
users.get('/id/:id', /* checkFirebaseToken,*/ getUserById)


module.exports = users;