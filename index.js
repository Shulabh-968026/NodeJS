const express=require("express");
const app=express();
const routerPath=require("./router/auth");
const conn=require("./models/conn");
const User=require("./models/schema");
const dotenv=require("dotenv");
const appPath=require("./router/post");
dotenv.config();
app.use(express.json());
app.use("/api/user",routerPath);
app.use("/api/post",appPath);


app.listen(8000,()=>{
    console.log("server start at post 8000");
})