const db = require('../config/dbConfig');

class Account {
  static userAuthentication(userData, callback) {
    const {username, password } = userData;
    const sql = 'select * from users where userName= ?';
    db.query(sql, [username], (err, results) => {
      if (err) { return callback(err, null); }
      if (results.length === 0) { return callback(null, false); }
      const user = results[0];
      if (user.Password !== password) { return callback(null, false); }
      callback(null, true, user);
    });
  } 
  
  static createNew(userData, callback) {
    const {FirstName, LastName, UserName, Email, Password, UserType, MobileNo, ProfilePictureURL, Description} = userData;
    const sql = `INSERT INTO Users (firstName, lastName, userName, phoneNo, email, password, userType, profilePictureURL, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    db.query(sql, [FirstName, LastName, UserName, Email, Password, UserType, MobileNo, ProfilePictureURL, Description], (err, results) => {
      if (err) { return callback(err, null); }
      console.log(results)
      callback(null, true);
    });
  }
}

module.exports = Account;