var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  username: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  }
});
mongoose.model('User',UserSchema);
