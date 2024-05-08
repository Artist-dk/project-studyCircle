const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');
const libraryRoute = require('./routes/library');
const emailRoute = require('./routes/email');
const testRoute = require('./routes/test');
// const cors = require("cors");


const app = express();

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to set the 'Access-Control-Allow-Origin' header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*'); // or specify specific origins instead of '*'
    next();
});

app.use('/contact', contactRoute);
app.use('/library', libraryRoute);
app.use('/email', emailRoute);
app.use('/',testRoute);

// app.get('/',(req,res)=> {
//     console.log(req.query)
//     return res.json({ user: 'artist' })
//   })
  

// const PORT = process.env.PORT || 8081;
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
