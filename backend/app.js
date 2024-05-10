const express = require('express');
const bodyParser = require('body-parser');
const contactusRoute = require('./routes/contactus');
const libraryRoute = require('./routes/library');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const accountRoute = require('./routes/account')
const settingsRoute = require('./routes/settings')
const session = require('express-session');
const cors = require("cors");
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const db = require('./config/dbConfig')

const sessionStore = new MySQLStore({}, db);
app.use(session({
    secret: 'your_secret_key', // Change this to a random string
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24 // Session expiration time (1 day)
    }
}));

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/account', accountRoute);
app.use('/contactus', contactusRoute);
app.use('/library', libraryRoute);
app.use('/',testRoute);
app.use('/message', messageRoute)
app.use('/settings', settingsRoute)


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
