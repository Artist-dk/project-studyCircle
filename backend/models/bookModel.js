const db = require('../config/dbConfig');

class Book {
    constructor(title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.language = language;
        this.book_type = book_type;
        this.publication_date = publication_date;
        this.publisher = publisher;
        this.genre = genre;
        this.edition = edition;
        this.price = price;
        this.description = description;
        this.cover_image_url = cover_image_url;
        this.file_url = file_url;
    }

    static create(bookData, callback) {
        const sql = `INSERT INTO ebooks (title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, file_url) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const values = [
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.language,
            bookData.book_type,
            bookData.publication_date,
            bookData.publisher,
            bookData.genre,
            bookData.edition,
            bookData.price,
            bookData.description,
            bookData.cover_image_url,
            bookData.file_url
        ];

        db.query(sql, values, (error, result) => {
            if (error) {
                console.error('Error saving book:', error);
                return callback(error, null);
            } else {
                console.log('Book saved successfully');
                return callback(null, result);
            }
        });
    }
    static async getAllBooks() {
        const sql = 'SELECT * FROM ebooks';
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const books = results.map(result => {
                        return new Book(
                            result.title,
                            result.author,
                            result.pages,
                            result.language,
                            result.book_type,
                            result.publication_date,
                            result.publisher,
                            result.genre,
                            result.edition,
                            result.price,
                            result.description,
                            result.cover_image_url,
                            result.file_url
                        );
                    });
                    resolve(books);
                }
            });
        });
    }
}

module.exports = Book;
