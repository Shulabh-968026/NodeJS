const { models } = require("mongoose");

const router=require("express").Router();
const User=require("../models/schema");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

router.post("/register",async(req,res)=>{

    const emailExit=await User.findOne({email:req.body.email});
    if(emailExit) return res.status(400).send("Email Already Exist");

    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(req.body.password,salt);


    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    })
    try{
         const userSaved=await user.save();
         res.status(200).send(userSaved);
    }catch(err)
    {
        res.status(400).send(err);
    }
})


router.post("/login",async(req,res)=>{
    
    const user=await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email or Password is Invalid");

    const validPassword=await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send("Email or Password Invalid");

    const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
     res.header("auth-token",token).send(token);

     res.status(200).send("You Successfully logged in");
})
module.exports=router;