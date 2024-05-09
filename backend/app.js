const express = require('express');
const bodyParser = require('body-parser');
const contactusRoute = require('./routes/contactus');
const libraryRoute = require('./routes/library');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const accountRoute = require('./routes/account')
const session = require('express-session');
const cors = require("cors");
const MySQLStore = require('express-mysql-session')(session);

const db = require('./config/dbConfig')

const app = express();

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

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (for form data)


app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});


const isLoggedIn = (req, res, next) => {
    // Replace this with your actual authentication logic
    // For demonstration purposes, always returning false
    const isAuthenticated = false;
    console.log("isAuthenticated")

    if (isAuthenticated) {
        next(); // User is authenticated, proceed to next middleware
    } else {
        res.redirect('/login'); // Redirect to login page
    }
};
// Middleware to check authentication for protected routes
app.use(['/protected-route1', '/protected-route2'], isLoggedIn);
// Protected routes
app.get('/protected-route1', (req, res) => {
    res.send('Protected Route 1'); // Render your protected route content here
});

app.get('/protected-route2', (req, res) => {
    res.send('Protected Route 2'); // Render your protected route content here
});

app.use('/account', accountRoute);
app.use('/contactus', contactusRoute);
app.use('/library', libraryRoute);
app.use('/',testRoute);
app.use('/message', messageRoute)


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
