const express = require("express");
const { getBlog, createBlog, deleteBlog, updateBlog } = require("../controllers/blogController");
const auth = require("../midleware/auth");
const blogRoutes = express.Router();

blogRoutes.get("/", getBlog);
blogRoutes.post("/",auth, createBlog);
blogRoutes.delete("/:id",auth, deleteBlog)
blogRoutes.put("/:id",auth, updateBlog)

// blogRoutes.post("/", (req, res)=>{
//     res.send("Blog Post Request");
// });

module.exports = blogRoutes;