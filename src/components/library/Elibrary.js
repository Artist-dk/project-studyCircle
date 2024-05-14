import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ELibrary() {
    const [ebooks, setEbooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, []);
    function print() {
        console.log("Print")
        console.log(ebooks.result)
    }
    useEffect(function(){
        print()
    },[ebooks])

    function fetchBooks() {    
        axios.get('http://localhost:8081/library/get-all-books',  {headers: {'Content-Type': 'multipart/form-data'}} )
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                setEbooks(response.data)
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });  
    }
    return (<div>
        <h1>Library Books</h1>
        {ebooks.result && (
            ebooks.result.map(el => (
                <div key={el.id} className="book-container">
                    <img className="book-image" src={el.coverImageURL} alt={el.title} />
                    <div className="book-details">
                        <h2 className="book-title">{el.title}</h2>
                        <p>Author: {el.author}</p>
                        <p className="book-description">{el.description}</p>
                        <a href={el.fileURL}>Read Book</a>
                    </div>
                </div>
            ))
        )}
    </div>
    
    );
}

export default ELibrary;
