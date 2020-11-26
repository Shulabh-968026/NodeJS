const mongoose=require("mongoose");
const conn=require("./conn");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:10
    },
    password:{
        type:String,
        required:true,
        min:3,
        max:10
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const UserSchema=new mongoose.model("User",userSchema);

module.exports=UserSchema;