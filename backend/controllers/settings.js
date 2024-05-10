const db = require('../config/dbConfig');

// messageController.js
const model = require('../models/settings');

const Settings = {
  theme: (req, res) => {
    console.log(req)
    model.theme(req.body, (err, messageId) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ message: 'Message saved successfully', messageId });
    });
    res.send("Hacked")
  },
};

module.exports = Settings;
