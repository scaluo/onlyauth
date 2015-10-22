module.exports = {
  db: 'mongodb://localhost:27017/onlyauth',
  sessionSecret: 'onlyauthSecret',
  name: 'onlyauth',
  root: 'http://localhost:3000',
  mail_opts: {
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: 'onlyauth_t@163.com',
      pass: 'onlyauth'
    }
  }
}
