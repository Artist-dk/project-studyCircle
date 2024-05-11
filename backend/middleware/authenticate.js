const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verification = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne( {_id:verification._id, "tokens:token": token });

    if(!rootUser) { throw new Error("user not found")}
    
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

  } catch(err) {
    resizeBy.status(401).send("unauthorized: no token provided")
    console.log(err)
  }
}

module.exports = Authenticate;