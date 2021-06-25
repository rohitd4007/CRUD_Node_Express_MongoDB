const express = require('express');
const app = express();
app.use(express.json())

//connecting to port 8080
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("started at port 8080 ")
});


app.use((req, res, next) => {
    res.send("Hello")
});