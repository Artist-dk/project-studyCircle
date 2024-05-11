const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).clearCookie("jwtoken").send("Loged out");
})

module.exports = router;