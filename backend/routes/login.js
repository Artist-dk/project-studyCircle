const express = require("express")
const db = require('../config/dbConfig')
const router = express.Router()

router.post('/',(req, res) => {
  console.log(username, password)
  db.query(`SELECT * FROM users WHERE username = ?`, [req.body.username], (error, result) => {
    if(error) {
      return res.status(400).send("Server error")
    }
    if(!result[0]) {
      return res.status(200).send("data not found")
    }
    if(req.body.password !== result[0].password) {
      return res.status(200).send("Invalid credentials")
    }
    res.status(200).cookie('jwtoken', "hacked by artist dk", {
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // Expires in 24 hours
      httpOnly: false
    }).send();
  })
})

module.exports = router;