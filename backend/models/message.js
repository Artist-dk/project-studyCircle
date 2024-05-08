// messageModel.js
const mysql = require('mysql');

const db = require('../config/dbConfig');

class MessageModel {
  static saveMessage(messageData, callback) {
    const sql = 'INSERT INTO Messages (SenderID, RecipientID, MessageType, MessageContent, MediaSource, SentAt) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [messageData.SenderID, messageData.RecipientID, messageData.MessageType, messageData.MessageContent, messageData.MediaSource, messageData.SentAt], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result.insertId);
    });
  }

  static fetchMessage(receiverId, callback) {
    const sql = 'SELECT * FROM messages WHERE receiver_id = ?';
    db.query(sql, [receiverId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
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
    const sql = 'SELECT * FROM messages';
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
