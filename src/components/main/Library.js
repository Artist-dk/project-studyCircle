import React from 'react';
import "./libraryStyle.css";

export default function Library() {
  return (
    <div className="body home">
            <div className="h-box-1 welcome">
                <div className="mid">
                    <p>Education is the most powerful weapon which you can use to change the world.</p>
                    <h1><span className="grad"><span>R</span>ESOURCE </span> REPOSITORY<br /></h1>
                    <p className="glass fit-center box-3">1000 Books</p>
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
                <h1>Upload new book</h1>
                <p></p>
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
