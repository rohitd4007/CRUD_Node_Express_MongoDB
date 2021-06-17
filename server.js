const express = require('express');

const app = express();


const port = 8080;
app.listen(port, () => {
    console.log("started")
});

app.get("/", (req, res) => {
    res.send("hello from backend")
})