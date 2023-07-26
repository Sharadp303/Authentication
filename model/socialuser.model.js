const mongoose=require('mongoose')

const socialUserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    loginMethod:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports= mongoose.model("SocialUser",socialUserSchema)