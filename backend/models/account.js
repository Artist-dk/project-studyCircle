const db = require('../config/dbConfig');

class Account {
  static userAuthentication(userData, callback) {
    const {username, password } = userData;
    const sql = 'select * from users where username= ?';
    db.query(sql, [username], (err, results) => {
      if (err) { return callback(err, null); }
      if (results.length === 0) { return callback(null, false); }
      const user = results[0];
      if (user.Password !== password) { return callback(null, false); }
      callback(null, true, user);
    });
  } 
  
  static createNew(userData, callback) {
    const {UserName, Email, Password, UserType, FullName, ProfilePictureURL, Bio, UniversityID, CollegeID} = userData;
    const sql = `INSERT INTO Users (UserName, Email, Password, UserType, ProfilePictureURL, Bio, UniversityID, CollegeID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    db.query(sql, [UserName, Email, Password, UserType, ProfilePictureURL, Bio, UniversityID, CollegeID], (err, results) => {
      if (err) { return callback(err, null); }
      console.log(results)
      callback(null, true);
    });
  }
}

module.exports = Account;