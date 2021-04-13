const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull database")
}).catch((e)=>{
    console.log("No connection is database")
})