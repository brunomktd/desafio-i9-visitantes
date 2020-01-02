const Sequelize = require('sequelize');

const Visit = require('../app/models/Visit');

const databaseConfig = require('../config/database');

const models = [Visit];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
