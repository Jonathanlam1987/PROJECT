const { isEmail } = require('validator');
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
const cuid = require('cuid');


const userCategories = ['customer', 'admin']

const userSchema = new Schema({
    _id: { type: String, default: cuid },
    name: { type: String, required: true, unique: true },
    email: { type: String, validate: { validator: isEmail } },
    password: { type: String, required: true },
    category: {
      type: String,
      enum: userCategories,
    },
  });

  const User = mongoose.model('User', userSchema);
  module.exports = {
    User
  }