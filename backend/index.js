const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

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