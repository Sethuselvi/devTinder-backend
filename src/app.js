const express = require('express');
const app = express();
const connectDB = require('./config/database');


connectDB().then(()=>{
    console.log("Dtabase Connection established...")
    app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
}).catch((err)=>{
    console.error("Database connection cannot be established")
})



