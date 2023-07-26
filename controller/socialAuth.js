const passport=require('passport')
const SocialUser=require('../model/socialuser.model')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;

require('dotenv').config()

passport.use(new GoogleStrategy({
    clientID:process.env.googleClientID,
    clientSecret:process.env.googleClientSecret,
    callbackURL:`http://localhost:${process.env.PORT}/auth/google/callback`,
},
async (accessToken, refreshToken, profile, done)=>{
    try{
       // console.log(profile)
        let user=await SocialUser.findOne({email:profile.emails[0].value,loginMethod:'google'})

        if(!user){
            user=new SocialUser({
                name:profile.displayName,
                email:profile.emails[0].value,
                loginMethod:'google'
            })

            await user.save()
        }
        return done(null,user)
    }
    catch(err){
        console.log(err)
    }
}
))

passport.use(new FacebookStrategy({
    clientID:process.env.facebookClientID,
    clientSecret:process.env.facebookClientSecret,
    callbackURL:`http://localhost:${process.env.PORT}/auth/facebook/callback`,
    profileFields: ['id', 'displayName', 'email']
},
async (accessToken, refreshToken, profile, done)=>{
    try{
        //console.log(profile)
        let user=await SocialUser.findOne({email:profile.emails[0].value})

        if(!user){
            user=new SocialUser({
                name:profile.displayName,
                email:profile.emails[0].value,
                loginMethod:'facebook'
            })

            await user.save()
        }
        return done(null,user)

    }
    catch(err){
        console.log(err)
    }
}
))



passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser(async (id, done) => {
    try {
      const user = await SocialUser.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleAuthCallback = passport.authenticate('google', {failureRedirect: '/login'});

const facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
const facebookAuthCallback = passport.authenticate('facebook', {failureRedirect: '/login'});


module.exports={googleAuth,googleAuthCallback,facebookAuth,facebookAuthCallback}

