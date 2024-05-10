const db = require('../config/dbConfig');
const model = require('../models/message');

const Message = {
  saveMessage: (req, res) => {
    model.saveMessage(req.body, (err, messageId) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ message: 'Message saved successfully', messageId });
    });
  },

  getReceiverId: (req, res) => {
    const receiverId = req.params.receiverId;

    model.getMessagesByReceiverId(receiverId, (err, messages) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(messages);
    });
  },

  fetchUsers: (req, res) => {
    model.fetchUsers((err, message) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(message);
    });
  },

  fetchMessages: (req, res) => {
    const { UserID } = req.query;
    console.log(req.session.user.UserID)

    console.log(UserID)
    model.fetchMessages(req.session.user.UserID, UserID, (err, message) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(message);
    });
  },
};

module.exports = Message;

// // Add a New Book
// exports.fetchUsers = (req, res) => {
//     console.log("fetching users")
//     const sql = `select * from users`;

//     db.query(sql, (error, result) => {
//         if (error) {
//             console.error('Error fetching users:', error);
//             res.status(500).json({ error: 'Error fetching users' });
//         } else {
//             console.log('Users fetched successfully');
//             res.status(200).json(result);
//         }
//     });
// };

// exports.sendMessage = (req, res) => {
//     const bookId = req.params.bookId; // Assuming bookId is passed as a parameter

//     const sql = `SELECT * FROM books WHERE id = ?`;

//     db.query(sql, [bookId], (error, result) => {
//         if (error) {
//             console.error('Error fetching book from the library:', error);
//             res.status(500).json({ error: 'Error fetching book from the library' });
//         } else {
//             if (result.length > 0) {
//                 console.log('Book fetched from the library successfully');
//                 res.status(200).json({ book: result[0] });
//             } else {
//                 console.log('Book not found');
//                 res.status(404).json({ error: 'Book not found' });
//             }
//         }
//     });
// };




// // Route for retrieving recipient user_id
// // app.post('/getRecipientId', 
// exports.getRecipientId = (req, res) => {
//   const recipient = req.body.recipient;

//   const sql = "SELECT user_id FROM users WHERE username = ?";
//   connection.query(sql, [recipient], (err, result) => {
//       if (err) {
//           console.error('Error executing query: ' + err);
//           return res.status(500).send('Internal Server Error.');
//       }

//       if (result.length > 0) {
//           const recipientId = result[0].user_id;
//           req.session.recipient_id = recipientId;
//           return res.send('Recipient ID set successfully.');
//       } else {
//           return res.status(404).send('Recipient not found.');
//       }
//   });
// };

// // Route for retrieving recipient details
// // app.get('/recipientDetails', 
// exports.recipientDetails = (req, res) => {
//   if (req.session.recipient_id) {
//       const sql = "SELECT * FROM users WHERE user_id = ?";
//       connection.query(sql, [req.session.recipient_id], (err, result) => {
//           if (err) {
//               console.error('Error executing query: ' + err);
//               return res.status(500).send('Internal Server Error.');
//           }
          
//           if (result.length > 0) {
//               const row = result[0];
//               const el = `
//                   <div class="grid-1">
//                       <div class="img-cont"><img src="${row.profilePic}" alt=""></div>
//                       <div class="name-cont">${row.fname} ${row.lname}</div>
//                       <div class="online-status"></div>
//                   </div>
//                   <div><img src="" alt=""></div>`;
//               return res.send(el);
//           } else {
//               return res.status(404).send('Recipient not found.');
//           }
//       });
//   } else {
//       return res.status(400).send('Recipient ID not set in session.');
//   }
// };


// // Route for retrieving messages
// // app.get('/messages', (req, res) => 
// exports.fetchMessages = (req, res) => {
//   if (req.session.user_id && req.session.recipient_id) {
//       const sql = `SELECT * FROM messages 
//                    WHERE (recipient_id = ? OR recipient_id = ?) 
//                    AND (sender_id = ? OR sender_id = ?)`;
//       const values = [
//           req.session.recipient_id,
//           req.session.user_id,
//           req.session.user_id,
//           req.session.recipient_id
//       ];

//       connection.query(sql, values, (err, result) => {
//           if (err) {
//               console.error('Error executing query: ' + err);
//               return res.status(500).send('Internal Server Error.');
//           }

//           let messages = '';
//           if (result.length > 0) {
//               result.forEach(row => {
//                   const msg_type = (row.sender_id === req.session.user_id) ? 'b' : 'a';
//                   messages += getMsg(msg_type, row.msg, row.src, row.time);
//               });
//           } else {
//               messages += "<div class='first-msg-sug'><span onclick='sayhi()'>Say Hi!</span></div>";
//           }

//           return res.send(messages);
//       });
//   } else {
//       return res.status(400).send('User ID or recipient ID not set in session.');
//   }
// };