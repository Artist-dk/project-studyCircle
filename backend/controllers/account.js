
const model = require('../models/account');


// Define the generateToken function
function generateToken(length = 32) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

const Account = {
  login: (req, res) => {
    console.log(req.query)
    model.userAuthentication(req.query, (err, isValid, user)=> {
      if(err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      if(!isValid) {
        return res.status(401).json({ error: 'Invalid username or password', value: false});
      }
      // const token = generateToken();
      // res.cookie('token', token, {
      //     expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // Expires in 24 hours
      //     httpOnly: false
      // });
  
      // res.status(200).json({
      //   message: 'Login successful',
      //   sid: req.session.id,
      //   user: user // Send user information in the response
      // });


      res.status(200).cookie('token', "Hacked the box", {
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // Expires in 24 hours
        httpOnly: false
      })
      res.send("Hacked")
    })
  },  
  login1: (req, res) => {
    console.log(req.body)
    model.userAuthentication(req.body, (err, isValid, user)=> {
      if(err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      if(!isValid) {
        return res.status(401).json({ error: 'Invalid username or password', value: false});
      }
      const token = generateToken();
      res.cookie('token', token, {
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // Expires in 24 hours
          httpOnly: false
      });
  
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