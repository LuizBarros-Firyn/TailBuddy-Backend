const { Model, DataTypes } = require('sequelize');

class Organization extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        passwordResetToken: DataTypes.STRING,
        passwordResetTokenExpiresAt: DataTypes.DATE
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Organization;
