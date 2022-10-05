const express = require("express"); // import express
const app = express(); // create object of express as app
const blogRoutes = require("./routes/blogRoutes");  // importing blogRoutes
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv").config(); //config is a method of dotenv package
const cors = require("cors");

const mongoose = require("mongoose") // importing mongoose package for database

app.use(express.json()); //This is convert request body in JSON format

app.use(cors()); //This middile ware add header in API


app.use("/user", userRouter); // creating admin route
app.use("/blog", blogRoutes); // creating blog route

app.get("/", (req, res) => {
    res.send("Dipu Portfolio Blogs API..OKK!");
})

const PORT = process.env.PORT || 5000;

//This is simple connection for mongoose db
mongoose.connect(process.env.MONGO_URL)
    .then(() => { // this will called when connection success

        app.listen(PORT, () => {
            console.log("Server Start port " + PORT)
        })

    })
    .catch((error) => { // called when connection failed
        console.log("DATBASE Error Occurs ", error)
    })

