'use strict';
const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mongoose.Schema({
  email: { type: String },
  books: [bookSchema],
});

const userModel = mongoose.model('user', userSchema);
// console.log(userSchema);
const seedUserData = () => {
  console.log();
  const newUser = new userModel({
    email: process.env.EMAIL,
    books: [
      {
        name: 'When Nietzsche Wept',
        description:
          'In 19th-century Vienna, a drama of love, fate, Irvin D. Yalom',
        status: 'read',
      },
      {
        name: 'Veronika Decides to Die',
        description: 'In his latest international bestseller, Paulo Coelho',
        status: 'read',
      },
      {
        name: 'Das Parfum',
        description:
          'In acclaimed bestseller and international sensation, Patrick Suskind',
        status: 'currently-reading',
      },
    ],
  });

  newUser.save();
};


module.exports = { userModel, seedUserData };
