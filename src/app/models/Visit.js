const { Sequelize, Model } = require('sequelize');

class Visit extends Model {
  static init(sequelize) {
    super.init(
      {
        id_representative: Sequelize.INTEGER,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        dt_visit: Sequelize.DATE,
        cost: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Visit;
