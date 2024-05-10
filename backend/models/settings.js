// messageModel.js
const mysql = require('mysql');

const db = require('../config/dbConfig');

class Settings {
  static theme(theme,UserID,callback) {
    const sql = 'update settings set theme = ? where userId = ?';
    db.query(sql,[theme,UserID], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  }
}

module.exports = Settings;
