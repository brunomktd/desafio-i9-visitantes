require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
