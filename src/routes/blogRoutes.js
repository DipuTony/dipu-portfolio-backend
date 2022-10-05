const express = require("express");
const blogRoutes = express.Router();

blogRoutes.get("/", (req, res)=>{
    res.send("Blog Get Request");
});

blogRoutes.post("/", (req, res)=>{
    res.send("Blog Post Request");
});

module.exports = blogRoutes;