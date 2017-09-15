const Sequelize = require('sequelize');

const dburl = 'postgres://omnkczup:zTrrEhtItzX5mOT-7z-9a89zVg-IdEyF@pellefant.db.elephantsql.com:5432/omnkczup';

const db = new Sequelize(dburl, {dialect: 'postgres'});
//mount database
db.authenticate ()
  .then(() => {
    console.log('db authenticated');
  })
  .catch(() => {
    console.log('failed to mount');
  })

  module.exports = db;
  //allowing anything else to access this instance of db