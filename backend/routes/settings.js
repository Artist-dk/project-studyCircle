const express = require('express');
const router = express.Router();
const controller = require('../controllers/settings');

router.get('/theme', controller.fetchUsers);
// router.post('/saveMessage', upload.single('file'), settingsController.saveMessage);



module.exports = router;