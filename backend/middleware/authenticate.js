
const db = require("../config/dbConfig")

const Authenticate = async (req, res, next) => {
  try {
    user = req.session.user
    db.query("SELECT * FROM users WHERE username = ? AND password = ? ", [user.userName, user.password], (error, result)=> {
      if(error) {
        return res.status(400).clearCookie("spy").send("Server error. Please login again!")
      }
      if(!result.length) {
        return res.status(400).clearCookie("spy").send("Ivalid login credentials found. Please login again!")
      }
    })
    next()
  } catch(err) {
    res.status(401).clearCookie("spy").send("Unauthorized: not connecting to the client")
    console.log(err)
  }
}

module.exports = Authenticate;