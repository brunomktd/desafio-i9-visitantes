const { Router } = require('express');

const VisitController = require('./app/controllers/VisitController');
const ReportController = require('./app/controllers/ReportController');

const routes = new Router();

routes.post('/visits', VisitController.store);
routes.get('/visits', VisitController.index);
routes.get('/visits/:index', VisitController.show);
routes.put('/visits/:index', VisitController.update);
routes.delete('/visits/:index', VisitController.delete);

// Reports
routes.get('/reports', ReportController.index);

module.exports = routes;
