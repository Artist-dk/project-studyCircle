const db = require('../config/dbConfig');

exports.submitContactForm = (req, res) => {
    const { firstname, lastname, emailid, phoneno, message } = req.body;

    const sql = 'INSERT INTO contact_forms (firstname, lastname, emailid, phoneno, message) VALUES (?, ?, ?, ?, ?)';
    const values = [firstname, lastname, emailid, phoneno, message];

    db.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error saving contact form:', error);
            res.status(500).json({ error: 'Error saving contact form' });
        } else {
            console.log('Contact form data saved successfully');
            res.status(200).json({ message: 'Contact form data saved successfully' });
        }
    });
};
