
const model = require('../models/account');

const account = {
  login: (req, res) => {
    model.userAuthentication(req.body, (err, isValid, user)=> {
      if(err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      if(!isValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      req.session.user = user;
      console.log(req.session);
      res.status(200).json({ message: 'Login successful'});
    })
  },
  createNew: (req, res) => {
    res.send("createNew")
  }
}

module.exports  = account;