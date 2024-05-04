
-- Books Table: Stores information about each book in the library.
CREATE TABLE Books (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    AuthorID INT,
    Publisher VARCHAR(255),
    PublicationDate DATE,
    Genre VARCHAR(100),
    Description TEXT,
    Language VARCHAR(50),
    NumberOfPages INT,
    Price DECIMAL(10, 2),
    Edition VARCHAR(50),
    CoverImageURL VARCHAR(255),
    BookType ENUM('physical', 'ebook') NOT NULL DEFAULT 'physical',
    Available BOOLEAN NOT NULL DEFAULT TRUE,
    BookURL VARCHAR(255);
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);

-- Authors Table: Stores information about authors.
CREATE TABLE Authors (
    AuthorID INT AUTO_INCREMENT PRIMARY KEY,
    AuthorName VARCHAR(255) NOT NULL
);


-- Patrons Table: Stores information about library patrons (members).
CREATE TABLE Patrons (
    PatronID INT AUTO_INCREMENT PRIMARY KEY,
    PatronName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Phone VARCHAR(20)
);


-- Transactions Table: Tracks transactions such as checkouts and returns.
CREATE TABLE Transactions (
    TransactionID INT AUTO_INCREMENT PRIMARY KEY,
    BookID INT,
    PatronID INT,
    TransactionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    DueDate DATE,
    Returned BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (PatronID) REFERENCES Patrons(PatronID)
);


-- 


-- 


-- 