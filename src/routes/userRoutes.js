const express = require("express");
const userRouter = express.Router();

userRouter.post("/signin",(req, res)=>{
    res.send("Sign In")
})


module.exports = userRouter;