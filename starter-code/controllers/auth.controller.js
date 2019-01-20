const mongoose = require('mongoose');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
    res.render('auth/register');
}

module.exports.doRegister = (req, res, next) => {
    User.findOne({ email: req.body.email})
      .then(user => {
        if (user) {
          res.render('auth/register', {
            user: req.body,
            errors: {
              email: 'Email already registered'
            }
          });
        } else {
          user = new User({
            email: req.body.email,
            password: req.body.password,
          });
  
          return user.save()
            .then(user => {
              res.redirect('/login');
            });
        }
      })
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('auth/register', {
            user: req.body,
            errors: error.errors
          });
        } else {
          next(error);
        }
      });
  }
  