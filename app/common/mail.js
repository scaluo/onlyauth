var mailer = require('nodemailer');
var config = require('../../config/config.js');
var transport = mailer.createTransport('SMPT',config.mail_opts);

var sendMail = function(data){
  transport.sendMail(data,function(err){
    if (err){
      console.log(err);
    }
  });
};

exports.sendMail = sendMail;

exports.sendTestMail = function(){
  transport.sendMail({
    from: 'from',
    to: '393395040@qq.com',
    subject: '这是onlyauth的认证',
    html: '<p>onlyauth is a good project</p>'
  },function(err,response){
    if(err){
            console.log(err);
        }else{
            console.log("Message sent: " + response.message);
        }


  });
}

exports.sendActiveMail = function(who,token,name){
  var from = config.name;
  var to = who;
  var subject = config.name+'激活账号';
  var html = '<p>您好：' + name + '</p>'+
             '<p>请点击下面下面的链接激活'+config.name+'账户</p>'+
             '<a href="'+config.root+'/active_account?key='+token+'&name='+name+'">激活链接</a>';

  exports.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: html
  });
};
