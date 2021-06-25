const express = require('express');
const dbConfig = require("./Config/dbConfig")
const mongoose = require("mongoose")
const userRoutes = require("./Routes/UserRoute");
const app = express();
app.use(express.json())

//connecting to port 8080
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("started at port 8080 ")
});

//connect to database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use((req, res, next) => {
    next();
});

app.use("/api/users", userRoutes)

module.exports = app
