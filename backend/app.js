const express = require('express');
const bodyParser = require('body-parser');
const contactusRoute = require('./routes/contactus');
const libraryRoute = require('./routes/library');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const accountRoute = require('./routes/account')
const settingsRoute = require('./routes/settings')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cors = require("cors");
const cookieParser = require("cookie-parser")
const db = require('./config/dbConfig')

const app = express();

app.use(cors({
  // origin: ["*"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser())

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionStore = new MySQLStore({}, db);
console.log(sessionStore)
app.use(session({
  key: "userId",
  secret: 'studycircle',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    secure: false, // Set to true if using HTTPS
    // maxAge: 1000 * 60 * 60 * 24 // Session expiration time (1 day)
    maxAge: 5000 // Session expiration time (1 day)
  }
}));

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
