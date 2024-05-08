const express = require('express');
const router = express.Router();
const contactus = require('../controllers/contactusController');

router.post('/send', 
  contactus.saveMessage
);

module.exports = router;
