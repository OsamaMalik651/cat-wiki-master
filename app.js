require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Server connected")
})

//Set up port
const port = process.env.PORT || 5000;
app.listen(port)

console.log(`App running on ${port}`);
