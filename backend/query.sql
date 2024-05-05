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
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    UserType ENUM('Student', 'Teacher', 'University') NOT NULL,
    FullName VARCHAR(100), -- Added for user profiles
    ProfilePictureURL VARCHAR(255), -- Added for user profiles
    Bio TEXT, -- Added for user profiles
    UniversityID INT, -- Added for universities
    CollegeID INT, -- Added for colleges
    FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID), -- Added for universities
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID) -- Added for colleges
);
INSERT INTO Users (UserName, Email, Password, UserType, FullName, ProfilePictureURL, Bio, UniversityID, CollegeID)
VALUES 
    ('user1', 'user1@example.com', 'password1', 'Student', 'User One', 'https://example.com/user1.jpg', 'Bio for User One', NULL, NULL),
    ('user2', 'user2@example.com', 'password2', 'Student', 'User Two', 'https://example.com/user2.jpg', 'Bio for User Two', NULL, NULL),
    ('user3', 'user3@example.com', 'password3', 'Teacher', 'Teacher One', 'https://example.com/teacher1.jpg', 'Bio for Teacher One', NULL, NULL),
    ('user4', 'user4@example.com', 'password4', 'Teacher', 'Teacher Two', 'https://example.com/teacher2.jpg', 'Bio for Teacher Two', NULL, NULL),
    ('user5', 'user5@example.com', 'password5', 'University', 'University One', 'https://example.com/university1.jpg', 'Bio for University One', NULL, NULL),
    ('user6', 'user6@example.com', 'password6', 'University', 'University Two', 'https://example.com/university2.jpg', 'Bio for University Two', NULL, NULL),
    ('user7', 'user7@example.com', 'password7', 'Student', 'College One', 'https://example.com/college1.jpg', 'Bio for College One', NULL, NULL),
    ('user8', 'user8@example.com', 'password8', 'Student', 'College Two', 'https://example.com/college2.jpg', 'Bio for College Two', NULL, NULL),
    ('user9', 'user9@example.com', 'password9', 'Student', 'User Nine', 'https://example.com/user9.jpg', 'Bio for User Nine', NULL, NULL),
    ('user10', 'user10@example.com', 'password10', 'Student', 'User Ten', 'https://example.com/user10.jpg', 'Bio for User Ten', NULL, NULL);


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
CREATE TABLE Messages (
    MessageID INT PRIMARY KEY AUTO_INCREMENT,
    ConversationID INT,
    SenderID INT,
    Message TEXT,
    SentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ConversationID) REFERENCES Conversations(ConversationID),
    FOREIGN KEY (SenderID) REFERENCES Users(UserID)
);

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


CREATE TABLE ebooks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    language VARCHAR(50) NOT NULL,
    book_type VARCHAR(50),
    publication_date DATE,
    publisher VARCHAR(255),
    genre VARCHAR(100),
    edition VARCHAR(50),
    price DECIMAL(10, 2),
    description TEXT,
    cover_image_url VARCHAR(255),
    book_url VARCHAR(255)
);
DROP TABLE books;
select * from ebooks;