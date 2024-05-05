const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');
const libraryRoute = require('./routes/library');
const emailRoute = require('./routes/email');
const testRoute = require('./routes/test')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
