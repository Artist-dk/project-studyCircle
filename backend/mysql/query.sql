
CREATE DATABASE studyCircle;
USE studyCircle;
CREATE TABLE IF NOT EXISTS contactUs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    phoneNo VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    phoneNo VARCHAR(15), 
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    userType ENUM('Student', 'Teacher', 'University', 'User') DEFAULT 'User',
    profilePictureURL VARCHAR(255) DEFAULT 'https://i.pinimg.com/originals/5d/ad/83/5dad83eac77969d6583e067e3a82f0b3.jpg',
    description TEXT
);

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    senderId INT NOT NULL,
    recipientId INT NOT NULL,
    messageType ENUM('text', 'image', 'document', 'video', 'audio', 'other') DEFAULT 'text',
    messageContent TEXT,
    mediaSource TEXT,
    sentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES users(id),
    FOREIGN KEY (recipientId) REFERENCES users(id)
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    language VARCHAR(50) NOT NULL,
    bookType VARCHAR(50) NOT NULL,
    publicationDate DATE,
    publisher VARCHAR(255),
    genre VARCHAR(100),
    edition VARCHAR(50),
    price DECIMAL(10, 2),
    description TEXT,
    coverImageURL VARCHAR(255),
    fileURL VARCHAR(255)
);

CREATE TABLE settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    theme VARCHAR(20),
    notification BOOLEAN,
    FOREIGN KEY (userId) REFERENCES users(id)
);


CREATE TABLE tutorials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_id VARCHAR(255) NOT NULL,
    file_link VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




CREATE TABLE Universities (
    UniversityID INT PRIMARY KEY AUTO_INCREMENT,
    UniversityName VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL
);

CREATE TABLE Colleges (
    CollegeID INT PRIMARY KEY AUTO_INCREMENT,
    CollegeName VARCHAR(100) NOT NULL,
    UniversityID INT,
    FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID)
);

CREATE TABLE Tutorials (
    TutorialID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

CREATE TABLE Contests (
    ContestID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    StartTime DATETIME,
    EndTime DATETIME
);

CREATE TABLE ContestParticipants (
    ContestID INT,
    UserID INT,
    PRIMARY KEY (ContestID, UserID),
    FOREIGN KEY (ContestID) REFERENCES Contests(ContestID),
    FOREIGN KEY (UserID) REFERENCES Users(id)
);

CREATE TABLE LibraryResources (
    ResourceID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    AuthorID INT NOT NULL,
    ResourceType ENUM('Book', 'Article', 'Video') NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(id)
);

CREATE TABLE PracticeQuestions (
    QuestionID INT PRIMARY KEY AUTO_INCREMENT,
    Question TEXT NOT NULL,
    Answer TEXT NOT NULL,
    Difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    Topic VARCHAR(100)
);

CREATE TABLE UserPracticeProgress (
    UserID INT,
    QuestionID INT,
    CompletionStatus ENUM('Not Started', 'In Progress', 'Completed') DEFAULT 'Not Started',
    FOREIGN KEY (UserID) REFERENCES Users(id),
    FOREIGN KEY (QuestionID) REFERENCES PracticeQuestions(QuestionID)
);


CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(100) NOT NULL,
    CollegeID INT,
    TeacherID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID),
    FOREIGN KEY (TeacherID) REFERENCES Users(id)
);

CREATE TABLE Assignments (
    AssignmentID INT PRIMARY KEY AUTO_INCREMENT,
    AssignmentName VARCHAR(100) NOT NULL,
    CourseID INT,
    Description TEXT,
    Deadline DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE Grades (
    GradeID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    AssignmentID INT,
    Grade DECIMAL(5,2),
    FOREIGN KEY (StudentID) REFERENCES Users(id),
    FOREIGN KEY (AssignmentID) REFERENCES Assignments(AssignmentID)
);

CREATE TABLE Announcements (
    AnnouncementID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    Announcement TEXT,
    AnnouncerID INT,
    AnnouncementTime DATETIME,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    FOREIGN KEY (AnnouncerID) REFERENCES Users(id)
);


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
    FOREIGN KEY (UploadedBy) REFERENCES Users(id)
);


CREATE TABLE Conversations (
    ConversationID INT PRIMARY KEY AUTO_INCREMENT,
    ConversationName VARCHAR(100),
    CreatedBy INT, -- UserID of the user who created the conversation
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CreatedBy) REFERENCES Users(id)
);

CREATE TABLE ConversationMembers (
    ConversationID INT,
    UserID INT,
    PRIMARY KEY (ConversationID, UserID),
    FOREIGN KEY (ConversationID) REFERENCES Conversations(ConversationID),
    FOREIGN KEY (UserID) REFERENCES Users(id)
);



