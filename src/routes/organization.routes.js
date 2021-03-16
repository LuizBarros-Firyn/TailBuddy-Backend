const express = require('express');
const Organization = require('../controllers/Organization');

const organizationRouter = express.Router();

organizationRouter.post('/', Organization.create);

module.exports = organizationRouter;
