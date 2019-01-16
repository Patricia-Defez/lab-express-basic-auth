const mongoose = require('mongoose');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const bcrypt = require('bcrypt');
const WORK_FACTOR = 10;

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    match: [EMAIL_REGEX, 'invalid email format'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [8, 'user al least 8 chars']
  }
}, { timestamps: true });


const User = mongoose.model('User', schema);
module.exports = User;
