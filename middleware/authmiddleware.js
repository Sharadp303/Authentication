const jwt =require("jsonwebtoken")
require('dotenv').config()

async function verifyToken(req,res,next){
    try{
        const token=req.headers['token']
        
        if(!token){
            return res.status(401).json({message:"token required"})
        }

        jwt.verify(token,process.env.JWTSECRETKEY,async (error,data)=>{
            if(error){
            return res.status(401).json({message:"Not authorised"})
            }
            else{
                req.ID=data.id
                next()
                }
            }
        )
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
    
}
    

module.exports={verifyToken}