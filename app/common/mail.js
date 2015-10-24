var mailer = require('nodemailer');
var config = require('../../config/config.js');
var transport = mailer.createTransport('SMPT',config.mail_opts);

var sendMail = function(data){
  transport.sendMail(data,function(err){
    if (err){
      console.log(err);
    }
    //transport.close();
  });
};

exports.sendMail = sendMail;

exports.sendTestMail = function(){
  var transport = mailer.createTransport({
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: 'onlyauth_t@163.com',
      pass: 'onlyauth'
    }
  });
  transport.sendMail({
    from: 'sc_aluo@163.com',
    to: '393395040@qq.com',
    subject: 'hello',
    html:'<p>这是邮箱确认链接<a href="http://www.baidu.com">http://www.baidu.com</a></p>'
  },function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
  }
  );
};

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
