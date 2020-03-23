const express = require("express")
const server = express();
server.get('/',(req,res,next)=>{
    res.json({success:true,message:"Swagger get api"})
})
server.listen(3000,()=>{
    console.log("3000 listening")
})