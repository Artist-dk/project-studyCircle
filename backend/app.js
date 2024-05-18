const express = require('express');

const path = require('path')
const session = require('express-session');
const cors = require("cors");
const bodyParser = require('body-parser');
const MySQLStore = require('express-mysql-session')(session); 

const contactusRoute = require('./routes/contactus');
const libraryRoute = require('./routes/library');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const settingsRoute = require('./routes/settings')
const Authenticate = require('./middleware/authenticate')
const upload = require('./config/multerConfig');

const accountController = require('./controllers/account')
const messageController = require('./controllers/message')
const tutorialController = require('./controllers/tutorial')

const db = require('./config/dbConfig');
const { stat } = require('fs');


const fs = require('fs/promises');
const crypto = require('crypto');

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

const staticPath = path.join(__dirname,"/public")

console.log(__dirname)
console.log(staticPath)

app.use(express.static(staticPath));

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
// app.use('/tutorial', tutorialController)

app.use('/settings', settingsRoute)
app.use('/account/createnew', accountController.createNew);
app.use('/login', accountController.login);
app.use('/logout', accountController.logout);
app.get('/authenticate', Authenticate.frontEnd, (req, res)=> {
  res.status(200).send("authentication succeessfull");
});

app.post('/file', upload.single('file'), (req, res) => {
  console.log("express:post/file")
});

// Route to download a book file
app.get('/uploads/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  res.download(filePath, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});



const uploadsDir = path.join(__dirname, '/uploads/tutorial');

function generateUniqueId() {
  return crypto.randomBytes(16).toString('hex');
}



app.post('/tutorial/save', async (req, res) => {
  console.log("Entered into tutorial/save")
  let connection;
  try {
    // Get tutorial data from request body
    const tutorialData = req.body;

    // Generate unique ID for the file
    const uniqueId = generateUniqueId();
    const filePath = path.join(uploadsDir, `${uniqueId}.md`);

    // Generate Markdown content from tutorial data
    const tutorialContent = `# ${tutorialData.title}

${tutorialData.description}

${tutorialData.sections.map((section) => {
const trimmedContent = section.content.trim();
return `## ${section.title}

${section.media ? `![${section.title} Media](${section.media})` : ''}

${trimmedContent}`;
}).join('\n\n')}`;

    // Create uploads directory if it doesn't exist
    await fs.mkdir(uploadsDir, { recursive: true });

    // Write Markdown content to file
    await fs.writeFile(filePath, tutorialContent);

    // Insert file link and ID into the MySQL table
    const fileLink = `/uploads/tutorial/${uniqueId}.md`;  // Adjust the path if necessary
    const sql = 'INSERT INTO tutorials (file_id, file_link, title, description) VALUES (?, ?, ?, ?)';
    await db.query(sql, [uniqueId, fileLink, tutorialData.title, tutorialData.description]);

    res.json({ message: 'Tutorial saved successfully!', id: uniqueId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving tutorial' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});






// Route to fetch tutorial data by ID
app.get('/tutorial/:id', async (req, res) => {
  const tutorialId = req.params.id;

  db.query('SELECT * FROM tutorials WHERE file_id = ?', [tutorialId], async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching tutorial' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }

    const tutorialData = results[0];
    const filePath = path.join(__dirname, tutorialData.file_link);

    
    console.log(`Sending file from path: ${filePath}`);

    // Send the file as a response
    res.sendFile(filePath, (fileError) => {
      if (fileError) {
        console.error(`Error sending file ${filePath}:`, fileError);
        res.status(500).json({ message: 'Error sending tutorial file' });
      }
    });
  });
});










const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} \nhttp://localhost:${PORT}`);
});



