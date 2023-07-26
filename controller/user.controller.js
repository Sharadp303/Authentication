const User=require('../model/user.model')

async function findUser(req,res){
    try{
        const user=await User.findOne({_id:req.ID})
        res.status(200).json(user)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports={findUser}