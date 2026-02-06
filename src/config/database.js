const mongoose = require('mongoose');
//Mongoose.connect returns a promise
mongoose.connect('mongodb+srv://sethuselvi:1234@nodetuts.73kic02.mongodb.net/devTinder')

const connectDb = async () =>{
    //Mongoose.connect returns a promise
await mongoose.connect('mongodb+srv://sethuselvi:1234@nodetuts.73kic02.mongodb.net/devTinder')

}

connectDb().then(()=>{
    console.log("Connection established...")
}).catch((err)=>{
    console.error("Databse connection cannot be established")
})