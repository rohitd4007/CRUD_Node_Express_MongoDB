const express = require('express');
const dbConfig = require("./Config/dbConfig")
const mongoose = require("mongoose")

const app = express();




const port = 8080;
app.listen(port, () => {
    console.log("started")
});

app.get("/", (req, res) => {
    res.send("hello from backend")
})

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log(data.Collection)
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});