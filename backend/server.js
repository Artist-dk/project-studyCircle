const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scchatapp'
}) 

app.get('/',(re,res)=> {
  return res.json("From Backend side");
})

app.get('/users', (req, res)=> {
  db.query("USE scchatapp")
  const sql = "SELECT * FROM messages";
  db.query(sql, (err,data)=> {
    if(err) return res.json(err);
    return res.json(data);
  })
})
app.get('/get', (req, res)=> {
  let sql = "USE scchatapp"
  sql =  `SELECT * FROM messages WHERE sender = 1 AND receiver = 2`;
  db.query(sql, ()=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})



app.listen(8081, () => {
  console.log("listening")
})