Atlas username caiocsgomes: G8zlOiLm0RRfGAn0
Atlas ElectricalGrid caiocsgomes: XbLgAFxkeK2GztNM
//https://docs.atlas.mongodb.com/driver-connection/
/**
 * This snippet can go inside the database.js
 */
const MongoClient = require('mongodb').MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    //This comes from the atlas interface
    'mongodb+srv://USER:PASSWORD@cluster0-ntrwp.mongodb.net/shop?retryWrites=true'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

/**
 *  This code can go inside the app.js
 */

 mongoConnect(() => {
  app.listen(3000);
});
