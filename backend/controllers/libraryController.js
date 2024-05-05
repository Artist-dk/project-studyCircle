const db = require('../config/dbConfig');

exports.addNewBook = (req, res) => {
    const { title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url } = req.body;

    const filename = req.file.originalname;
    const fileUrl = req.file.path; 

    const sql = `INSERT INTO books (title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const values = [title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, fileUrl];

    db.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error adding book to the library:', error);
            res.status(500).json({ error: 'Error adding book to the library' });
        } else {
            console.log('Book added to the library successfully');
            res.status(200).json({ message: 'Book added to the library successfully' });
        }
    });
};
