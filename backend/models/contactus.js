const db = require('../config/dbConfig');

class Conatactus {
  static sendMessage(messageData, callback) {
    const { firstname, lastname, phoneno, emailid, message } = messageData
    console.log(messageData)
    const sql =  `INSERT INTO contactus ( firstname, lastname, phoneno, emailid, message )
    VALUES (?, ?, ?, ?, ?)`
    db.query(sql, [ firstname, lastname, phoneno, emailid, message ], (err, results) => {
      if (err) { return callback(err, null); }
      console.log(results)
      console.log(err)
      callback(null, results);
    });
  } 
}

module.exports = Conatactus;