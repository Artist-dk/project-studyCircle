import React from 'react';
import "./libraryStyle.css";
import { withRouter, Link,  } from 'react-router-dom';
const Library = () => {
  const goToStudent = () => {
  };
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
                                            <tbody>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                            </tbody>
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
                                            <tbody>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                            </tbody>
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
                    {/* <h2>Add New Book</h2> */}
                    <div className="lib-form-container">
                        <form action="add_book.php" method="post">
                            <h1><span>Add</span> New Book</h1>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" id="title" name="title" required />
                                </div>
                                <div className="input">
                                    <label htmlFor="author">Author:</label>
                                    <input type="text" id="author" name="author" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="publisher">Publisher:</label>
                                    <input type="text" id="publisher" name="publisher" />
                                </div>

                                <div className="input">
                                    <label htmlFor="publication_date">Publication Date:</label>
                                    <input type="date" id="publication_date" name="publication_date" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input">
                                    <label htmlFor="genre">Genre:</label>
                                    <input type="text" id="genre" name="genre"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="description">Description:</label>
                                    <textarea id="description" name="description"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="language">Language:</label>
                                    <input type="text" id="language" name="language"/>
                                </div>
                                <div className="input">
                                    <label htmlFor="edition">Edition:</label>
                                    <input type="text" id="edition" name="edition" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="number_of_pages">Number of Pages:</label>
                                    <input type="number" id="number_of_pages" name="number_of_pages" />
                                </div>
                                <div className="input">
                                    <label htmlFor="price">Price:</label>
                                    <input type="number" id="price" name="price" step="0.01" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="cover_image_url">Cover Image URL:</label>
                                    <input type="text" id="cover_image_url" name="cover_image_url" />
                                </div>
                                <div className="input">
                                    <label htmlFor="book_type">Book Type:</label>
                                    <select id="book_type" name="book_type">
                                        <option value="physical">Physical</option>
                                        <option value="ebook">Ebook</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="book_file">Book File:</label><br/>
                                    <input type="file" id="book_file" name="book_file" accept=".pdf,.doc,.docx,.txt" /><br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input input-submit">
                                    <input type="submit" value="Add Book" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="box-1">
                <Link to="/student">Student</Link>
                <button onClick={goToStudent}>go to student</button>
      <Link to="/student" onClick={goToStudent}>Student</Link>
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

export default Library;