// messageModel.js
const mysql = require('mysql');

const db = require('../config/dbConfig');

class MessageModel {
  static saveMessage(messageData, callback) {

    const { SenderID, RecipientID, MessageType, MessageContent, MediaSource, SentAt } = req.body;
    const sql = 'INSERT INTO Messages ( SenderID, RecipientID, MessageType, MessageContent, MediaSource, SentAt ) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [ SenderID, RecipientID, MessageType, MessageContent, MediaSource, SentAt ], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result.insertId);
    });
  }

  static fetchMessages(sender,recipient,callback) {
    // console.log(data);
    const sql = 'SELECT * FROM messages where SenderID=? AND RecipientID=?';
    db.query(sql,[sender, recipient], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  }

  static getMessageById(messageId, callback) {
    const sql = 'SELECT * FROM messages WHERE id = ?';
    db.query(sql, [messageId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result[0]);
    });
  }

  static fetchUsers(callback) {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  }

  static updateMessage(messageId, updatedContent, callback) {
    const sql = 'UPDATE messages SET content = ? WHERE id = ?';
    db.query(sql, [updatedContent, messageId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result.affectedRows > 0);
    });
  }

  static deleteMessage(messageId, callback) {
    const sql = 'DELETE FROM messages WHERE id = ?';
    connection.query(sql, [messageId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result.affectedRows > 0);
    });
  }
}

module.exports = MessageModel;
