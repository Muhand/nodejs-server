//Import modules
import { Router } from 'express';

//Export router
export default ({jobs}) => {
  let api = Router();

  // '/v1/'
  api.get('/', (req, res) => {
    jobs.Response(res, 200, "Welcome");
  });

  return api;
}
