const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Organization = require('../models/Organization');

const connection = new Sequelize(dbConfig);

User.init(connection);
Organization.init(connection);

module.exports = connection;
