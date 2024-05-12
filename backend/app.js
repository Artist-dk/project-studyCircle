const express = require('express');

const bodyParser = require('body-parser');
const contactusRoute = require('./routes/contactus');
const libraryRoute = require('./routes/library');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const settingsRoute = require('./routes/settings')
const Authenticate = require('./middleware/authenticate')
const upload = require('./config/multerConfig');

const accountController = require('./controllers/account')
const messageController = require('./controllers/message')

const session = require('express-session');
const cors = require("cors");
const db = require('./config/dbConfig');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const sessionStore = new MySQLStore({}, db);

app.use(session({
  key: "userId",
  secret: 'studycircle',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 1000 * 60 * 60 * 24 
  }
}));

app.use(express.static('public'));

app.use( cors({
  // origin: '*',
  origin: 'http://localhost:3000',
  credentials:true
}));

app.use((req, res, next) => {
  console.log(req.session.id)
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',testRoute);

app.get('/session', (req, res)=> {
  console.log(req.session)
  console.log(req.session.id)
  req.session.visited = true;
  res.cookie("sid", req.session.id, {maxAge: 1000})
  res.status(201).send("Hello")
})
app.get('/ses', (req, res)=> {
  res.status(201).send(req.session.id)
})

app.use('/contactus', contactusRoute);
app.use('/library', libraryRoute);

app.use('/message', messageRoute)

app.use('/settings', settingsRoute)
app.use('/account/createnew', accountController.createNew);
app.use('/login', accountController.login);
app.use('/logout', accountController.logout);
app.get('/authenticate', Authenticate.frontEnd, (req, res)=> {
  res.status(200).send("authentication succeessfull");
});

// router.post('/saveMessage', upload.single('file'), messageController.saveMessage);


const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
