var mongoose = require('mongoose');

module.exports = mongoose.model('User')
  fullName: String,
  password: String,
  email: String
});
