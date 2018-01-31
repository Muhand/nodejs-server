//Import modules
import { Router } from 'express';

//Export router
export default ({jobs, payloads}) => {
  let api = Router();

  // '/v1/'
  api.get('/', (req, res) => {
    let payload = payloads.Defined.Welcome;
    jobs.Response(res, payload.status_code, payload);
  });

  return api;
}
