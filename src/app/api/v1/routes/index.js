import express from 'express';
import controllersRouter from '../controllers/';
import jobs from '../jobs/'

let router = express();

//'/v1'
router.use('/', controllersRouter.Home({jobs}));


export default router;
