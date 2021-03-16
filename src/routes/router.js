const express = require('express');
const userRouter = require('./user.routes');
const organizationRouter = require('./organization.routes');

const router = express.Router();

router.use('/users', userRouter);
router.use('/organizations', organizationRouter);

router.get('/', (request, response) => response.json({ message: 'Hello!' }));

module.exports = router;
