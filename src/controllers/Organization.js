const Organization = require('../models/Organization');

module.exports = {
  create: async (request, response) => {
    const { name, email, password } = request.body;

    const organization = await Organization.create({
      name,
      email,
      password
    });

    return response.json(organization);
  }
};
