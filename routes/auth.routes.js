const {signUp, signIn}=require('../controller/auth')
const { findUser } = require('../controller/user.controller')
const { verifyToken } = require('../middleware/authmiddleware')

module.exports =function(app){
    app.post('/user/signup',signUp)
    app.post('/user/login',signIn)
    app.get('/user/me',[verifyToken],findUser)
}
