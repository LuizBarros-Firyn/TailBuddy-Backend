const express = require('express');
const User = require('../controllers/User');

const userRouter = express.Router();

userRouter.post('/', User.create);

module.exports = userRouter;
