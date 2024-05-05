const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
const upload = require('../config/multerConfig');

router.post('/add-new-book', upload.single('file'), libraryController.addNewBook);

module.exports = router;
