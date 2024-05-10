
const model = require('../models/account');

const Account = {
  login: (req, res) => {
    model.userAuthentication(req.query, (err, isValid, user)=> {
      if(err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      if(!isValid) {
        return res.status(401).json({ error: 'Invalid username or password', value: false});
      }
      // console.log((req.session.id === '8eFjkDQDztuKaeL1imtl0xsq7h8siEhN')?"hacked":"art")
      req.session.user = user; // console.log(req.session.user.UserName)
      res.status(200).json({
        message: 'Login successful',
        id: req.session.id
      });
    })
  },
  checklogin: (req, res) => {
    if(req.session.id === req.query.id){
      return res.status(200).json({
        message: "logged in",
        value: true
      });
    } else {
      return res.status(401).json({ error: 'Not logged in', value: false});
    }
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.sendStatus(500); // Internal server error
      } else {
        res.send('User logged out successfully');
      }
    });
  },
  createNew: (req, res) => {
    model.createNew(req.body, (err, result)=> {
      if(err) {
        return res.status(500).json({ error: 'Data already exists' });
      }
      res.status(200).json({ message: 'Account created successfully'});
    })
  }
}

module.exports  = Account;