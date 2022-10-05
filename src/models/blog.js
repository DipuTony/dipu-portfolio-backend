const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title:{
        type : String,
        require : true
    },
    blogpost : {
        type : String,
        require : true
    },
    postid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    }
}, {timestamps : true});

module.exports = mongoose.model("Blog", BlogSchema);