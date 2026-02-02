const express = require('express');
const app = express();

// //Testing regex pattern routes
//Route pattern uses express 5 syntax
// Works with /ac,/abc
//Express 4(older version pattern) "ab?c"
app.get("/a{b}c",(req,res)=>{
    res.send("Testing optional pattern")
})

// // Works with /abc ,/abbbc
//Express 4(older version pattern) "ab+c"
// app.get(/^\/ab+c$/,(req,res)=>{
//     res.send("Testing + pattern")
// })

// Works with /abc ,/absethuselvic
//Express 4(older version pattern) "ab*c"
app.get(/^\/ab.*c$/,(req,res)=>{
    res.send("Testing * pattern")
})

// // Works with /ad ,/abcd,/abcbcbcd
//Express 4(older version pattern) "a(bc)?d"
// app.get(/^\/a(bc).*d$/,(req,res)=>{
//     res.send("Testing option group pattern")
// })



app.get("/user",(req,res)=>{
    res.send({firstName:"sethu",lastName:"selvi"})
})
app.post("/user",(req,res)=>{
    res.send("Data successfully saved to database")
})
app.delete("/user",(req,res)=>{
    res.send("Deleted successfully")
})
app.use("/test",(req,res)=>{
    res.send("Hello from server!!")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})



// app.use("/",(req,res)=>{
//     res.send("Hello from dashboard!!")
// })
