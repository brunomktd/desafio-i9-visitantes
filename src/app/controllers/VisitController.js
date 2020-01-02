const Yup = require('yup');

const Visit = require('../models/Visit');

class VisitController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id_representative: Yup.number().required(),
      name: Yup.string().required(),
      address: Yup.string().required(),
      dt_visit: Yup.date().required(),
      cost: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      id_representative: representative,
      name,
      address,
      dt_visit: date,
      cost,
    } = await Visit.create(req.body);

    return res.json({
      id,
      representative,
      name,
      address,
      date,
      cost,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const visits = await Visit.findAll({
      attributes: [
        'id',
        ['id_representative', 'representative'],
        'name',
        'address',
        ['dt_visit', 'date'],
        'cost',
      ],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(visits);
  }

  async show(req, res) {
    const { index } = req.params;
    const { page = 1 } = req.query;

    const userVisit = await Visit.findAll({
      where: { id_representative: index },
      attributes: [
        'id',
        ['id_representative', 'representative'],
        'name',
        'address',
        ['dt_visit', 'date'],
        'cost',
      ],
      limit: 5,
      offset: (page - 1) * 5,
    });

    if (!userVisit.length > 0) {
      return res.status(400).json({ error: 'User visit does not exists' });
    }

    return res.json(userVisit);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id_representative: Yup.number().required(),
      name: Yup.string().required(),
      address: Yup.string().required(),
      dt_visit: Yup.date().required(),
      cost: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { index } = req.params;

    const visit = await Visit.findByPk(index);

    if (!visit) {
      return res.status(400).json({ error: 'Visit does not exists' });
    }

    const {
      id,
      id_representative: representative,
      name,
      address,
      dt_visit: date,
      cost,
    } = await visit.update(req.body);

    return res.json({
      id,
      representative,
      name,
      address,
      date,
      cost,
    });
  }

  async delete(req, res) {
    const { index } = req.params;

    const visit = await Visit.findByPk(index);

    if (!visit) {
      return res.status(400).json({ error: 'Visit does not exists' });
    }

    await visit.destroy();

    return res.json({ message: 'Successfully deleted visit' });
  }
}

module.exports = new VisitController();
