const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const upload = require('../config/multerConfig');
// const Book = require('../models/bookModel');

router.get('/fetchUsers', messageController.fetchUsers);
router.get('/fetchMessages', messageController.fetchMessages);
router.post('/saveMessage', upload.single('file'), messageController.saveMessage);
router.get('/getRecipientId', upload.single('file'), messageController.fetchMessages);
router.get('/recipientDetails', upload.single('file'), messageController.fetchMessages);



module.exports = router;
