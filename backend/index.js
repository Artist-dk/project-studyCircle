const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'studycircle'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
app.get('/',(req,res)=> {
  console.log(req.query)
  return res.json({ user: 'artist' })
})

app.post('/submit', (req, res) => {
  let { firstname, lastname, emailid, phoneno, message } = req.body;

  const sql = 'INSERT INTO contactus (firstname, lastname, phoneno, emailid, message) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [firstname, lastname, phoneno, emailid, message], (err, result) => {
      if (err) {
          console.error('Error saving contact:', err);
          res.status(500).json({ error: 'Error saving contact' });
      } else console.log('Contact saved successfully')
  });
  res.json({ message: 'JSON data received successfully' });
});


// ------------- add new book

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'library-ebooks/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});
const upload1 = multer({ storage: storage });
app.post('/library-add-new-book', upload1.single('file'), (req, res) => {
  try {
      // Insert the file information into the database
      console.log(req.body)
      console.log(req.body.title)
      const filename = req.file.originalname;
      const url = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;

      db.query(`INSERT INTO ebooks (title, author, pages, language, book_type, publication_date, publisher, genre, edition, price, description, cover_image_url, book_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        req.body.title, 
        req.body.author, 
        req.body.pages, 
        req.body.language, 
        req.body.book_type, 
        req.body.publication_date, 
        req.body.publisher, 
        req.body.genre, 
        req.body.edition, 
        req.body.price, 
        req.body.description, 
        req.body.cover_image_url,
        url
      ], (error, results, fields) => {
          if (error) {
              console.error(error);
              res.status(500).send('Error uploading file');
              return;
          }

          res.send('File uploaded successfully!');
      });
  } catch (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
  }
});

// Serve uploaded files
app.use('/library-ebooks', express.static(path.join(__dirname, 'library-ebooks')));






// ----------------
app.post('/send-email', (req, res) => {

  console.log(req.body)
  const { firstname, lastname, phoneno, emailid, message } = req.body;

  console.log( firstname, lastname, phoneno, emailid, message )
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'digambarckumbhar299@gmail.com', // Your email address
      pass: 'cvlb jxff noeq opyt' // Your email password
    }
  });

  // Setup email data
  let mailOptions = {
    from: emailid,
    to: 'digambarckumbhar299@gmail.com', // Recipient email address
    subject: 'New Contact Form Submission',
    text: `Name: ${firstname + " " + lastname}\nPhone no.: ${phoneno}\nEmail: ${emailid}\n\nMessage: ${message}`
  };
  // Send email with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// ----------------
app.listen(8081, () => {
  console.log("listening: http://localhost:8081")
})