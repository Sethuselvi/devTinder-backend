const express = require('express');
const app = express();
//Overrides http methods
// app.use("/user",(req,res)=>{
//     res.send("HAHAHA")
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
