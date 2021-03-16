module.exports = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: true,
    underscored: true
  }
};
