import React, { useState, useEffect } from 'react';

function ELibrary() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/library/get-all-books', {
          // mode: 'no-cors',
          // // method: "get",
          // headers: {
          //     "Content-Type": "application/json"
          // },
          // body: JSON.stringify(ob)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                return response.json();
            })
            .then(data => {
              setBooks(data.books);
              console.log(books)
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div>
            <h1>Library Books</h1>
            {books.map(book => (
                <div key={book.id} className="book-container">
                    <img className="book-image" src={book.cover_image_url} alt={book.title} />
                    <div className="book-details">
                        <h2 className="book-title">{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p className="book-description">{book.description}</p>
                        <a href={book.book_url}>Read Book</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ELibrary;
