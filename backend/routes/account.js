const express = require('express');
const router = express.Router();
const controller = require('../controllers/account');
const upload = require('../config/multerConfig');

router.get('/login', controller.login);
router.post('/login1', controller.login1);
router.post('/createnew', controller.createNew);
router.get('/logout', controller.logout)
router.get('/checklogin', controller.checklogin)

// router.post('/saveMessage', upload.single('file'), messageController.saveMessage);

module.exports = router;
