const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User= require('./models/user');

app.post('/signup',async (req,res) =>{
    //Creating new instance of user model
    const user = new User({
        firstName:"Sachin",
        lastName:"Tendular",
        emailId:"sachintendulkar@gmail.com",
        password:"sethu@1230"
    })
    try{
        await user.save()
        res.send('User Added successfully')
    }
    catch(err){
        res.send(400).send("Error saving the user:" + err.message)
    }
    
})
connectDB().then(()=>{
    console.log("Database Connection established...")
    app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
}).catch((err)=>{
    console.error("Database connection cannot be established")
})



