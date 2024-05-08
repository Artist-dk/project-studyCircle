const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
const upload = require('../config/multerConfig');
// const Book = require('../models/bookModel');

router.post('/add-new-book', upload.single('file'), libraryController.addNewBook);

router.get('/get-all-books', libraryController.fetchAllBooks
//  async (req, res) => {
//   try {
//       const books = await Book.getAllBooks();
//       res.status(200).json(books);
//   } catch (error) {
//       console.error('Error fetching books:', error);
//       res.status(500).json({ error: 'Error fetching books' });
//   }
// }
);

module.exports = router;
