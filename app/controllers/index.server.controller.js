exports.render = function(req,res){
  res.render('index',{
    title: '首页',
    content: '这是一个用户认证的空框架项目，这是首页'
  });
};
