const users = require('express').Router();
const multer = require('multer');
const { createUser, getAllUsers } = require('../queries/users');
const { checkFirebaseToken } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/data/uploads');
    },
    filename: (req, file, cb)  => {
        let name = file.originalname;
        cb(null, name)
    }
})

const upload = multer({ storage: storage})

users.post('/', upload.single('file'), createUser);
users.get('/', checkFirebaseToken, getAllUsers)

module.exports = users;