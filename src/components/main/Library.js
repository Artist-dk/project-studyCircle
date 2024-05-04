import React from 'react';
import "./libraryStyle.css";

export default function Library() {
  return (
    <div className="body home">
            <div className="h-box-1 welcome">
                <div className="mid">
                    {/* <p>Education is the most powerful weapon which you can use to change the world.</p> */}
                    <h1><span className="grad"><span>R</span>ESOURCE </span> REPOSITORY<br /></h1>
                    {/* <p className="glass fit-center box-3">1000 Books</p> */}
                </div>
            </div>
            <div className="box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2 " d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Registered Books: </h1>
                    <div className="lib-card-grid">
                        <div className='mid'>
                            <div className="lib-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>3k</h1>
                                    <div className="content">
                                        <h2>Digital Library</h2>
                                        <table>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <button>Go to Library</button>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="lib-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>3k</h1>
                                    <div className="content">
                                        <h2>Physical Library</h2>
                                        <table>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <button>Go to Library</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Categories</h1>
                    <p>Here's a list of common book categories:</p>
                    <ul className="categories-list">
                        <li>Fiction</li>
                        <li>Non-fiction</li>
                        <li>Mystery</li>
                        <li>Thriller</li>
                        <li>Science Fiction</li>
                        <li>Fantasy</li>
                        <li>Biography</li>
                        <li>Autobiography</li>
                        <li>Self-help</li>
                        <li>Historical Fiction</li>
                        <li>Horror</li>
                        <li>Children's Books</li>
                        <li>Young Adult</li>
                        <li>Travel</li>
                        <li>Cooking</li>
                        <li>Art & Photography</li>
                        <li>Business & Finance</li>
                    </ul>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Top Physical Libraries</h1>
                    <p>Below list shows top engaged physical libraries registered on StudyCircle.</p>
                    
                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Most accessed digital books</h1>
                    
                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Most accessed physical books</h1>

                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
        <div className="box-1">
            <div className="mid">    
                <h2>Add New Book</h2>
                    <form action="add_book.php" method="post">
                        <label for="title">Title:</label><br />
                        <input type="text" id="title" name="title" required /><br />

                        <label for="author">Author:</label><br />
                        <input type="text" id="author" name="author" required /><br />

                        <label for="publisher">Publisher:</label><br />
                        <input type="text" id="publisher" name="publisher" /><br />

                        <label for="publication_date">Publication Date:</label><br />
                        <input type="date" id="publication_date" name="publication_date" /><br />

                        <label for="genre">Genre:</label><br />
                        <input type="text" id="genre" name="genre"/><br />

                        <label for="description">Description:</label><br />
                        <textarea id="description" name="description"></textarea><br />

                        <label for="language">Language:</label><br />
                        <input type="text" id="language" name="language"/><br />

                        <label for="number_of_pages">Number of Pages:</label><br />
                        <input type="number" id="number_of_pages" name="number_of_pages" /><br />

                        <label for="price">Price:</label><br />
                        <input type="number" id="price" name="price" step="0.01" /><br />

                        <label for="edition">Edition:</label><br />
                        <input type="text" id="edition" name="edition" /><br />

                        <label for="cover_image_url">Cover Image URL:</label><br />
                        <input type="text" id="cover_image_url" name="cover_image_url" /><br />

                        <label for="book_type">Book Type:</label><br />
                        <select id="book_type" name="book_type">
                            <option value="physical">Physical</option>
                            <option value="ebook">Ebook</option>
                        </select><br />

                        <label for="book_file">Book File:</label><br/>
                        <input type="file" id="book_file" name="book_file" accept=".pdf,.doc,.docx,.txt" /><br/>
        
                        <input type="submit" value="Add Book" />
                    </form>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
    </div>
  )
}
