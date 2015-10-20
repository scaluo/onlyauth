var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function(){
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(username,password,done){
    User.findOne({
        email: username
    },function(err,user){
      if (err){
        return done(err);
      }

      if (!user){
        return done(null,false,{
          message: '无效的用户名'
        });
      }

      if (!user.authenticate(password)){
        return done(null,false,{
          message: '无效的密码'
        });
      }

      return done(null,user);
    });

  }));
};
