
const model = require('../models/account');
const cookieParser = require('cookie-parser');

const Account = {
  login: (req, res) => {
    model.userAuthentication(req.query, (err, isValid, user)=> {
      if(err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      if(!isValid) {
        return res.status(401).json({ error: 'Invalid username or password', value: false});
      }

      const cookieOptions = {
        httpOnly: false, // Cookie cannot be accessed through client-side JavaScript
        maxAge: 3600 * 1000, // Cookie expires in 1 hour (adjust as needed)
        secure: false, // Cookie is only sent over HTTPS connections
        // sameSite: 'strict' // Cookie will only be sent in a first-party context
      };

      res.cookie('user', JSON.stringify(user), cookieOptions);
      console.log(req.session.id)
      res.status(200).json({
        message: 'Login successful',
        sid: req.session.id,
        user: user // Send user information in the response
      });
    })
  },  
  logout: (req, res) => {
    res.clearCookie('user', cookieOptions);
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.sendStatus(500); // Internal server error
      } else {
        res.send('User logged out successfully');
      }
    });
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