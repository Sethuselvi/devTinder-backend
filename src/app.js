const express = require('express');
const app = express();


// app.get("/user",(req,res,next) => {
//     console.log("Handling route User 2 !");
//     res.send("2nd Route Handler");
// })

app.get("/user",(req,res,next) => {
    console.log("Handling route User 1 !");
    next();
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
