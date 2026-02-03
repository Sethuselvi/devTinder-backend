const express = require('express');
const app = express();
// app.use("/user",(req,res,next) => {
//     console.log("Handling route User 1 !");
//     next();
//      res.send("1st Response")
// },
// (req,res) => {
//     console.log("Handling route User 2 !");
//     res.send("2nd Response")
// }
// )

app.use("/user",(req,res,next) => {
    console.log("Handling route User 1 !");
    next();
    //  res.send("1st Response")
},
(req,res,next) => {
    console.log("Handling route User 2 !");
    next();
    // res.send("2nd Response")
},
[(req,res,next) => {
    console.log("Handling route User 3 !");
    next();
    // res.send("3rd Response")
},
(req,res,next) => {
    console.log("Handling route User 4 !");
    next();
    // res.send("4th Response")
}],
(req,res,next) => {
    console.log("Handling route User 5 !");
    res.send("5th Response")
}
)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
