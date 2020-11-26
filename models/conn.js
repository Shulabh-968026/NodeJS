const mongoose=require("mongoose");

const conn=mongoose.connect("mongodb://localhost:27017/auth",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

module.exports=conn;