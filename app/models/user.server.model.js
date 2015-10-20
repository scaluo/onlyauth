var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/,'输入正确的邮箱地址']
  },
  username: {
    type: String,
    unique: true,
    trim: true

  },
  password: {
    type: String,
    validate: [
      function(password){
        return password.length >= 6;
      },
      '密码必须大于6位'
    ]
  },
  salt: {
    type: String
  },
  provider: {
    type: String,
    required: 'Provider is required'
  },
  providerId: String,
  providerData: {},

  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save',function(next){
    if (this.password){
      this.salt = new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
      this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password,this.salt,10000,64).toString('base64');
};

UserSchema.methods.authenticate = function(password){
  return this.password === this.hashPassword(password);
};

mongoose.model('User',UserSchema);
