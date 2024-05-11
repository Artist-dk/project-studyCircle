
const db = require("../config/dbConfig")

const Authenticate = async (req, res, next) => {
  try {
    // const id = req.cookies.spy;
    user = req.session.user
    // console.log(user)
    // console.log(user.userName)

    db.query("SELECT * FROM users WHERE username = ? AND password = ? ", [user.userName, user.password], (error, result)=> {
      if(error) {
        // .clearCookie("spy")
        console.log("step 1")
        return res.status(400).send("Server error. Please login again!")
      }
      if(!result.length) {
        
        console.log("step 2")
        return res.status(400).send("Ivalid login credentials found. Please login again!")
      }
    })
    
    console.log("step 3")
    next();
  } catch(err) {
    
    console.log("step 4")
    res.status(401).send("Unauthorized: not connecting to the client")
    console.log(err)
  }
}

module.exports = Authenticate;