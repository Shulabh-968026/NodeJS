const router=require("express").Router();
const verify=require("./authtoken");

router.get("/",verify,(req,res)=>{
    res.json({
       posts:{
           title:"my first post",
           description:"This is my descripton"
       } 
    })
});


module.exports=router;