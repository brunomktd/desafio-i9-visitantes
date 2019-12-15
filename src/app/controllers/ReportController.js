import sequelize from 'sequelize';
import Visit from '../models/Visit';

class ReportVisitController {
  async show(req, res) {
    const visits = await Visit.findAll({
      attributes: [
        'id_representative',
        [sequelize.fn('count', sequelize.col('id_representative')), 'count'],
      ],
      group: ['id_representative'],
      order: sequelize.literal('count DESC'),
      limit: 3,
    });

    const costs = await Visit.findAll({
      attributes: [
        'id_representative',
        [sequelize.fn('sum', sequelize.col('cost')), 'total'],
      ],
      group: ['id_representative'],
      order: sequelize.literal('total DESC'),
      limit: 3,
    });

    return res.json({
      topVisits: visits,
      topCosts: costs,
    });
  }
}

export default new ReportVisitController();
