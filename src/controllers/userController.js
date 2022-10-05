const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRATE_KEY = "TJIw9809JJKJkjkj989";

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        //Check Existing user
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists!" });
        }
        //Generate Hash Password
        const hashPassword = await bcrypt.hash(password, 10); // This fun repeat 10 times than that password set to database.
        //User Crete
        const result = await userModel.create({
            email: email,
            password: hashPassword,
            username: username
        })

        //Token generation
        const token = jwt.sign({ email: result.email, id: result._id }, SECRATE_KEY)
        res.status(201).json({ user: result, token: token })


    } catch (error) {
        console.log(error)
        res.status(500).json({message: "somethig went wrong"});
    }

}


//Sign In
const signin = async(req, res) => {
 const {email, password} = req.body;
 try {
    //Check Existing user
    const existingUser = await userModel.findOne({ email: email })
    if (!existingUser) {
        return res.status(404).json({ message: "User Not Found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password)

    if(!matchPassword){
        return res.status(400).json({message : "Invalid Password"});
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRATE_KEY)
    res.status(201).json({ user: existingUser, token: token })
    
 } catch (error) {
    console.log(error)
        res.status(500).json({message: "somethig went wrong"});
 }
}

module.exports = { signin, signup }