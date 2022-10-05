const express = require("express"); // import express
const app = express(); // create object of express as app
const blogRoutes = require("./routes/blogRoutes");  // importing blogRoutes
const userRouter = require("./routes/userRoutes");

const mongoose = require("mongoose") // importing mongoose package for database

app.use(express.json()); //This is convert request body in JSON format


app.use("/user", userRouter); // creating admin route
app.use("/blog", blogRoutes); // creating blog route

app.get("/", (req, res) => {
    res.send("Hello");
})
//This is simple connection for mongoose db
mongoose.connect("mongodb+srv://dipuFolipAdmin:DipuFolipAdmin1230@cluster0.mbj2ofn.mongodb.net/?retryWrites=true&w=majority")
    .then(() => { // this will called when connection success

        app.listen(5000, () => {
            console.log("Server Start port 5000")
        })

    })
    .catch((error) => { // called when connection failed
        console.log("Error Occurs ", error)
    })

