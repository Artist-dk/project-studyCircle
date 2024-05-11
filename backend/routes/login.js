const express = require("express")
const db = require('../config/dbConfig')
const router = express.Router()

router.post('/',(req, res) => {
  if(req.body.username) {
    try {
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
        
        req.session.visited = true;
        req.session.user = result[0]
        res.status(201).cookie("spy", req.session.id, {maxAge: 1000 * 60 }).send(req.session.id);
        console.log(req.session.id);

      })
    } catch(err) {
      res.status(400).send("Server error");
    }
  } else {
    res.send("Invalid credentials").status("200");
  }
})

module.exports = router;