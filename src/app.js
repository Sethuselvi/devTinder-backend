const express = require('express');
const app = express();

app.get("/admin/getAllData",(req,res) => {
    //Logic of checking if the request is authorized
    const token = "xyzwueggfwe"
    const isAdminAuthorized = token === "xyzwueggfwe"
    if(isAdminAuthorized){
         res.send("All data sent");
    }else{
        res.status(401).send("Unauthorized request");
    }
})

app.get("/admin/deleteUser",(req,res) => {
    //Logic of checking if the request is authorized
    const token = "xyzwueggfwe"
    const isAdminAuthorized = token === "xyzwueggfwe"
    if(isAdminAuthorized){
         res.send("Deleted a user");
    }else{
        res.status(401).send("Unauthorized request");
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
