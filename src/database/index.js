import Sequelize from 'sequelize';

import Visit from '../app/models/Visit';

import databaseConfig from '../config/database';

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

export default new Database();
