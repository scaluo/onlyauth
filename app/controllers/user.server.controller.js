var User = require('mongoose').model('User');

exports.renderSignup = function(req,res,next){
  if (!req.user){
    res.render('signup',{
      title: '注册'
    });

  }else{
    res.redirect('/');
  }
};

exports.signup = function(req,res,next){
  if (!req.user){
    var user = new User(req.body);
    user.save(function(err){
      if (err){
        return res.redirect('/signup');
      }
      return res.redirect('/');
    });
  }
};
