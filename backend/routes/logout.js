const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  if(req.session && req.session.id) {
    req.session.destroy();
  }
  res.status(200).clearCookie("spy").send("Loged out");
})

module.exports = router;