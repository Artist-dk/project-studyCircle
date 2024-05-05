const emailService = require('../services/emailService');

exports.sendEmail = async (req, res) => {
    const { firstname, lastname, phoneno, emailid, message } = req.body;

    const emailOptions = {
        from: emailid,
        to: 'digambarckumbhar299@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `Name: ${firstname} ${lastname}\nPhone no.: ${phoneno}\nEmail: ${emailid}\n\nMessage: ${message}`
    };

    try {
        const result = await emailService.sendEmail(emailOptions);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' });
    }
};
