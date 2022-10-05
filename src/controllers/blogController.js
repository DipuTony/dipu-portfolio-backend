const blog = require("../models/blog");
const blogModel = require("../models/blog")


const createBlog = async (req, res) => { // create new post -- POST request
    // console.log(req.userId)
    const { title, description } = req.body;

    const newBlog = new blogModel({
        title: title,
        description: description,
        userId: req.userId
    });

    try {
        await newBlog.save();
        res.status(201).json({message: "Post Added Successfully.", status:true, code:201});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", status:false, code:500 });
    }
}
const updateBlog = async (req, res) => { //Updating PUT request
    const id = req.params.id;
    const { title, description } = req.body;

    const newPost = {
        title: title,
        description: description,
        userId: req.userId
    }

    try {
        await blogModel.findByIdAndUpdate(id, newPost, { new: true });
        res.status(202).json({message: "Post Updated Successfully.", status:true, code:201});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong while Updating.", status:false, code:500});
    }

}
const deleteBlog = async (req, res) => { // Delete blog post
    const id = req.params.id;

    try {
        const post = await blogModel.findByIdAndRemove(id);
        res.status(202).json({message: "Post Deleted Successfully.", status:true, code:201});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong while deleting", status:false, code:500});
    }
}
const getBlog = async (req, res) => { //Get All blog post -- GET request
    try {
        const posts = await blogModel.find({ userId: req.userId });
        res.status(200).json(posts)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog
}
