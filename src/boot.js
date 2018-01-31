/*
 * This file is responsible on booting the server, loading configurations, etc...
 */
/*Start server using HTTP
Using HTTP to create server is a better solution
than using express, since we have more freedom
it will make life a lot easier when using socket.io
*/

//Import Modules
// import apiKeysConfig from './config/apiKeys/index';
// import bootConfig from './config/boot';
// import forbiddenPayload from './app/api/v1/payloads/forbidden';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import api from './app/api/v1'
import config from './config/index'

export default function boot(callback){
  process.on('warning', function(w){
    console.log('-------------------------------------------------------------');
    console.log(' => MEMORY LEAK WARNING - PRINTING STACK => ', w.stack || w);
    console.log('-------------------------------------------------------------');
  });

  //Initialize some variables
  let errors = [];

  //Initialize the server
  let app = express();
  app.server = http.createServer(app);

  //Configure bodyParser - Important to allow us to grab the body of POST
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json({
    //Limit how many byes we can recieve to avoide any unwanted requests
    limit: config.boot.bodyLimit
  }));

  //Prefix routes with the api version extension
  app.use(config.boot.v1API, api.Routes);

  // catch 403 and forward to error handler
  app.use( (req, res) => {
    let payload = api.Payloads.Defined.Forbidden;
    api.Jobs.Response(res, payload.status_code, payload);
  });

  /*
  Setup the server port
  Check if we have an enviornment variable set up already then use it,
  otherwise just use the constant port variable
  */
  var port = process.env.PORT || config.boot.backupPort;

  //Try to start the server
  if(errors.length === 0){
    app.server.listen(port, err => {
      if(err){
        errors.push(err);
        callback(errors,null);
      } else {
        callback(null,app);
      }
    });
  } else {
    callback(errors,null);
  }
};
