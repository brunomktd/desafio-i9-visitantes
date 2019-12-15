import { Router } from 'express';

import VisitController from './app/controllers/VisitController';
import ReportController from './app/controllers/ReportController';

const routes = new Router();

routes.post('/visits', VisitController.store);
routes.get('/visits', VisitController.index);
routes.get('/visits/:index', VisitController.show);
routes.put('/visits/:index', VisitController.update);
routes.delete('/visits/:index', VisitController.delete);

// Reports
routes.get('/reports', ReportController.show);

export default routes;
