-- Create the database
DROP DATABASE StudyCircle;
CREATE DATABASE StudyCircle;
USE StudyCircle;

CREATE TABLE IF NOT EXISTS contactus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phoneno VARCHAR(20) NOT NULL,
    emailid VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

truncate table contactus;
select * from contactus;

-- Create table for universities
CREATE TABLE Universities (
    UniversityID INT PRIMARY KEY AUTO_INCREMENT,
    UniversityName VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL
);

-- Create table for colleges
CREATE TABLE Colleges (
    CollegeID INT PRIMARY KEY AUTO_INCREMENT,
    CollegeName VARCHAR(100) NOT NULL,
    UniversityID INT,
    FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID)
);

-- Create tables for users
DROP TABLE if exists users;
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    UserType ENUM('Student', 'Teacher', 'University', 'User') DEFAULT 'User' NOT NULL,
    MobileNo VARCHAR(15), -- Assuming mobile numbers are stored as strings
    ProfilePictureURL VARCHAR(255),
    Description TEXT
);
INSERT INTO Users (FirstName, LastName, UserName, Email, Password, UserType, MobileNo, ProfilePictureURL, Description)
VALUES
('John', 'Doe', 'john_doe', 'john@example.com', 'password123', 'User', '1234567890', 'https://example.com/profile.jpg', 'Hello, I am John.'),
('Alice', 'Smith', 'alice_smith', 'alice@example.com', 'password456', 'User', '9876543210', 'https://example.com/alice_profile.jpg', 'Hi, I am Alice.'),
('Bob', 'Johnson', 'bob_johnson', 'bob@example.com', 'password789', 'User', '1357924680', 'https://example.com/bob_profile.jpg', 'Hey, I am Bob.'),
('Emily', 'Brown', 'emily_brown', 'emily@example.com', 'passwordabc', 'User', '2468135790', 'https://example.com/emily_profile.jpg', 'Hello, I am Emily.'),
('David', 'Wilson', 'david_wilson', 'david@example.com', 'passworddef', 'User', '3692581470', 'https://example.com/david_profile.jpg', 'Hi, I am David.'),
('Emma', 'Jones', 'emma_jones', 'emma@example.com', 'pass123word', 'User', '1592637480', 'https://example.com/emma_profile.jpg', 'Hey, I am Emma.'),
('Michael', 'Davis', 'michael_davis', 'michael@example.com', 'pass456word', 'User', '3571592468', 'https://example.com/michael_profile.jpg', 'Hello, I am Michael.'),
('Sarah', 'Martinez', 'sarah_martinez', 'sarah@example.com', 'pass789word', 'User', '8523691470', 'https://example.com/sarah_profile.jpg', 'Hi, I am Sarah.'),
('James', 'Rodriguez', 'james_rodriguez', 'james@example.com', 'passabcword', 'User', '7539514862', 'https://example.com/james_profile.jpg', 'Hey, I am James.'),
('Olivia', 'Garcia', 'olivia_garcia', 'olivia@example.com', 'passdefword', 'User', '9517536248', 'https://example.com/olivia_profile.jpg', 'Hello, I am Olivia.'),
('William', 'Lopez', 'william_lopez', 'william@example.com', 'pass123456', 'User', '1472583690', 'https://example.com/william_profile.jpg', 'Hi, I am William.'),
('Ava', 'Hernandez', 'ava_hernandez', 'ava@example.com', 'pass456789', 'User', '3698521470', 'https://example.com/ava_profile.jpg', 'Hey, I am Ava.'),
('Alexander', 'Gonzalez', 'alexander_gonzalez', 'alexander@example.com', 'pass789abc', 'User', '2583691470', 'https://example.com/alexander_profile.jpg', 'Hello, I am Alexander.'),
('Mia', 'Perez', 'mia_perez', 'mia@example.com', 'passabc123', 'User', '9876543210', 'https://example.com/mia_profile.jpg', 'Hi, I am Mia.'),
('Ethan', 'Sanchez', 'ethan_sanchez', 'ethan@example.com', 'passdef456', 'User', '6541239870', 'https://example.com/ethan_profile.jpg', 'Hey, I am Ethan.'),
('Charlotte', 'Rivera', 'charlotte_rivera', 'charlotte@example.com', 'pass123def', 'User', '1239876540', 'https://example.com/charlotte_profile.jpg', 'Hello, I am Charlotte.'),
('Noah', 'Young', 'noah_young', 'noah@example.com', 'pass456abc', 'User', '7894561230', 'https://example.com/noah_profile.jpg', 'Hi, I am Noah.'),
('Sophia', 'Hill', 'sophia_hill', 'sophia@example.com', 'pass789def', 'User', '3216549870', 'https://example.com/sophia_profile.jpg', 'Hey, I am Sophia.'),
('Liam', 'Flores', 'liam_flores', 'liam@example.com', 'pass123abc', 'User', '7418529630', 'https://example.com/liam_profile.jpg', 'Hello, I am Liam.'),
('Isabella', 'Nguyen', 'isabella_nguyen', 'isabella@example.com', 'pass456def', 'User', '9638527410', 'https://example.com/isabella_profile.jpg', 'Hi, I am Isabella.');


truncate table users;
select * from users;

-- Create table for courses
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(100) NOT NULL,
    CollegeID INT,
    TeacherID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID),
    FOREIGN KEY (TeacherID) REFERENCES Users(UserID)
);

-- Create table for assignments
CREATE TABLE Assignments (
    AssignmentID INT PRIMARY KEY AUTO_INCREMENT,
    AssignmentName VARCHAR(100) NOT NULL,
    CourseID INT,
    Description TEXT,
    Deadline DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- Create table for grades
CREATE TABLE Grades (
    GradeID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    AssignmentID INT,
    Grade DECIMAL(5,2),
    FOREIGN KEY (StudentID) REFERENCES Users(UserID),
    FOREIGN KEY (AssignmentID) REFERENCES Assignments(AssignmentID)
);

-- Create table for announcements
CREATE TABLE Announcements (
    AnnouncementID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    Announcement TEXT,
    AnnouncerID INT,
    AnnouncementTime DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    FOREIGN KEY (AnnouncerID) REFERENCES Users(UserID)
);

-- Create table for course materials
CREATE TABLE CourseMaterials (
    MaterialID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    MaterialType ENUM('Lecture Notes', 'Slides', 'Video', 'Other'),
    MaterialTitle VARCHAR(100) NOT NULL,
    MaterialDescription TEXT,
    MaterialURL VARCHAR(255),
    UploadedBy INT,
    UploadTime DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    FOREIGN KEY (UploadedBy) REFERENCES Users(UserID)
);

-- Create table for conversations
CREATE TABLE Conversations (
    ConversationID INT PRIMARY KEY AUTO_INCREMENT,
    ConversationName VARCHAR(100),
    CreatedBy INT, -- UserID of the user who created the conversation
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CreatedBy) REFERENCES Users(UserID)
);

-- Create table for members of conversations
CREATE TABLE ConversationMembers (
    ConversationID INT,
    UserID INT,
    PRIMARY KEY (ConversationID, UserID),
    FOREIGN KEY (ConversationID) REFERENCES Conversations(ConversationID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create table for messages
drop table if exists Messages;
CREATE TABLE Messages (
    MessageID INT PRIMARY KEY AUTO_INCREMENT,
    SenderID INT,
    RecipientID INT NOT NULL,
    MessageType ENUM('text', 'image', 'document', 'video', 'audio', 'other') NOT NULL,
    MessageContent TEXT,
    MediaSource TEXT, -- Column to store the source of media files
    SentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (RecipientID) REFERENCES Users(UserID)
);



INSERT INTO Messages (SenderID, RecipientID, MessageType, MessageContent, MediaSource, SentAt)
VALUES 
    (1, 2, 'text', 'Hello, how are you?', NULL, NOW()),
    (2, 1, 'text', 'I am doing well, thank you!', NULL, NOW()),
    (1, 3, 'image', 'Beautiful sunset', 'https://example.com/sunset.jpg', NOW()),
    (3, 1, 'document', 'Annual Report 2023', 'https://example.com/annual_report_2023.pdf', NOW()),
    (4, 2, 'video', 'Funny cat video', 'https://example.com/cat_video.mp4', NOW()),
    (2, 4, 'audio', 'Podcast episode', 'https://example.com/podcast_episode.mp3', NOW()),
    (1, 5, 'text', 'Have a great day!', NULL, NOW()),
    (5, 1, 'text', 'Thanks, you too!', NULL, NOW()),
    (2, 6, 'image', 'Cute puppy', 'https://example.com/puppy.jpg', NOW()),
    (6, 2, 'other', 'Miscellaneous file', 'https://example.com/misc_file.txt', NOW());
    
select * from Messages;
-- Create table for tutorials
CREATE TABLE Tutorials (
    TutorialID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

-- Create table for contests
CREATE TABLE Contests (
    ContestID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    StartTime DATETIME,
    EndTime DATETIME
);

-- Create table for contest participants
CREATE TABLE ContestParticipants (
    ContestID INT,
    UserID INT,
    PRIMARY KEY (ContestID, UserID),
    FOREIGN KEY (ContestID) REFERENCES Contests(ContestID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create table for library resources
CREATE TABLE LibraryResources (
    ResourceID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    ResourceType ENUM('Book', 'Article', 'Video') NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

-- Create table for practice questions
CREATE TABLE PracticeQuestions (
    QuestionID INT PRIMARY KEY AUTO_INCREMENT,
    Question TEXT NOT NULL,
    Answer TEXT NOT NULL,
    Difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    Topic VARCHAR(100)
);

-- Create table for user progress in practice
CREATE TABLE UserPracticeProgress (
    UserID INT,
    QuestionID INT,
    CompletionStatus ENUM('Not Started', 'In Progress', 'Completed') DEFAULT 'Not Started',
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (QuestionID) REFERENCES PracticeQuestions(QuestionID)
);


CREATE TABLE files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255),
    url varchar(255)
);
drop table files;
select * from files;


CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    language VARCHAR(50) NOT NULL,
    book_type VARCHAR(50) NOT NULL,
    publication_date DATE,
    publisher VARCHAR(255),
    genre VARCHAR(100),
    edition VARCHAR(50),
    price DECIMAL(10, 2),
    description TEXT,
    cover_image_url VARCHAR(255),
    file_url VARCHAR(255)
);
DROP TABLE books;
select * from books;

show tables;
select * from contactus;