const express = require('express');
const { getAllUsers, createUser,loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', getAllUsers);

router.post('/create', createUser);

router.post('/login',loginUser);

module.exports = router;
