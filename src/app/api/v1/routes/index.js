import express from 'express';
import controllersRouter from '../controllers/';
import jobs from '../jobs/'
import payloads from '../payloads/'

let router = express();

//'/v1'
router.use('/', controllersRouter.Home({jobs, payloads}));


export default router;
