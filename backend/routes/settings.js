const express = require('express')
const router = express.Router();
const controller =  require('../controllers/settings')

router.get('/theme',controller.theme);

module.exports = router;