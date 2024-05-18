
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const uploadsDir = path.join(__dirname, '/uploads/tutorial');

function generateUniqueId() {
  return crypto.randomBytes(16).toString('hex');
}

app.post('/save', async (req, res) => {
  try {
    const tutorialData = req.body;

    const uniqueId = generateUniqueId();
    const filePath = path.join(uploadsDir, `${uniqueId}.md`);

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

    res.json({ message: 'Tutorial saved successfully!', id: uniqueId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving tutorial' });
  }
});

const port = process.env.PORT || 3000; // Use environment variable or default port
app.listen(port, () => console.log(`Server listening on port ${port}`));
