const express= require("express")
const mongoose=require('mongoose')
const passport=require('passport')
const session=require('express-session')
require('dotenv').config()

const app=express()

app.use(express.json())
app.use(passport.initialize())
app.use(
    session({
      secret: process.env.SESSIONSECRETKEY, // Replace with your session secret
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(passport.session())

require('./routes/auth.routes')(app)
require('./routes/socialAuth.routes')(app)

mongoose.connect(process.env.DBURL).then(console.log("connected to Db")).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log("localhost:3000")
})
