const express = require('express');
const app = express();

app.get("/userData",(req,res) => {
    // try{  
    //     throw new Error("Some error")
    //     res.send("User logged in successfully");}
    // catch{
    //     res.status(500).send("Some error .Contact support team")
    // }
    throw new Error("Some error")
    
        
})

app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("Something went wrong")
  }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
