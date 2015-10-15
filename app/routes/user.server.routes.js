module.exports = function(app){
  var user = require('../controllers/user.server.controller.js');
  app.route('/signup')
     .get(user.renderSignup)
     .post(user.signup)
}
