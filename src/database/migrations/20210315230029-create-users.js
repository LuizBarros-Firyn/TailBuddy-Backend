module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordResetToken: {
        type: Sequelize.STRING,
        field: 'password_reset_token'
      },
      passwordResetTokenExpiresAt: {
        type: Sequelize.DATE,
        field: 'password_reset_token_expires_at'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
