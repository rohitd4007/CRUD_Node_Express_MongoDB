const express = require('express');
const dbConfig = require("./Config/dbConfig")
const mongoose = require("mongoose")
const app = express();
const User = require("./Model/UserModel")

const port = 8080;
app.listen(port, () => {
    console.log("started at port 8080 ")
});


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



// app.get("/", (req, res) => {
//     res.send("hello from backend")
// })

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