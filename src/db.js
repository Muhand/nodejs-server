import mongoose from 'mongoose';
import config from './config/index';

// const connect = =>
//   new Promise(
//     (resolve,reject) => {
//       mongoose.
//     }
//   );

export default callback => {
  mongoose.Promise = global.Promise;
  let db = mongoose.connect(config.db.mongoUrl, {
    //Require in mongo v4.11.0 since mongo.open was deprecated.
    //Refer to http://mongoosejs.com/docs/connections.html#use-mongo-client for more info
    useMongoClient: true,
  });
  callback(db);
}
