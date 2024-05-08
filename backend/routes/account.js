const express = require('express');
const router = express.Router();
const account = require('../controllers/account');
const upload = require('../config/multerConfig');

router.get('/login', account.login);
router.post('/createnew', account.createNew);

// router.post('/saveMessage', upload.single('file'), messageController.saveMessage);

module.exports = router;
