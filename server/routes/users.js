const users = require('express').Router();
const { createUser, getAllUsers } = require('../queries/users');
const { checkFirebaseToken } = require('../middleware/auth');

users.post('/', createUser);
users.get('/', checkFirebaseToken, getAllUsers)

module.exports = users;