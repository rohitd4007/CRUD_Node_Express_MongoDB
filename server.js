const express = require('express');
const dbConfig = require("./Config/dbConfig")
const mongoose = require("mongoose")
const app = express();
const User = require("./Model/UserModel")

const port = 8080;
app.listen(port, () => {
    console.log("started at port 8080 ")
});

// get all users data
app.get("/", async(req, res) => {
    try {
        const user = await User.find();
        console.log(user)
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
})


//get single user data based on "id"

app.get("/:id", async(req, res) => {
    try {

        const user = await User.findById(req.params.id);
        console.log(user)
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
})



//post -- create new user


app.post("/", async(req, res) => {
    try {
        const user = await User.create(req.body);
        console.log(user)
        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
})


app.get("/", async(req, res) => {
    try {
        const user = await User.find();

        res.status(201).json({
            status: 'sucess',
            data: { user },
        });
    } catch (err) {
        req.status(404).json({
            status: 'not found',
            message: err,
        });
    }
})




mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {


    // console.log(data.Collection.find)
    console.log("Successfully connected to the database");

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});