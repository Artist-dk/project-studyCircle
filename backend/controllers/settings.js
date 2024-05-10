const db = require('../config/dbConfig');

// messageController.js
const model = require('../models/settings');

const Settings = {
  theme: (req, res) => {  
    const { theme } = req.body;
    const userId = 1;
    model.theme(theme,userId, (err, result) => {
      if(err) {
        return res.status(500).json({error:err})
      }
      res.status(201).json({message:result})
    })
  },
};

module.exports = Settings;
