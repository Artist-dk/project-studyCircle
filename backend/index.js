const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
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
app.listen(8081, () => {
  console.log("listening")
})