/**
 * Send text message to a custom phone number, country code and message
 * @method response
 * @param  {Express.res} res       The response object
 * @param  {object} payload        The payload to send
 * @return {void} none
 */
function response(res, status_code, payload) {
  res.status = status_code;
  res.writeHead(res.status, {'Content-Type':'application/json'});
  res.end(JSON.stringify(payload));
}

export default response;
