import express from 'express';
import controllersRouter from '../controllers/';
import jobs from '../jobs/'
import payloads from '../payloads/'
import initializeDb from '../../../../db';

let router = express();

initializeDb(db => {
  //'/v1'
  router.use('/', controllersRouter.Home({jobs, payloads}));
});

export default router;
