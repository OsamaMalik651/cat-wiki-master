require('dotenv').config();
const express = require("express");
// const axios = require("axios")
const axios = require("axios")
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/api/top-breeds", async (req, res) => {
    //Get breeds from API
    const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': process.env.API_KEY
        },
    }).then(response => {
        return response;
    }).catch(err => {
        console.log(err);
    });

    //Function to get randomly selected Cat Breeds
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const results = getMultipleRandom(response.data, 10);
    //Filter the selected keys only
    const filteredData = [...results].map((obj) => {
        let object = Object.fromEntries(
            Object.entries(obj).filter(
                ([key]) => key.match("id") || key.match("name") || key.match("description") || key.match("image")
            )
        );
        return object;
    });
    res.send(filteredData)
})


//Set up port
const port = process.env.PORT || 5000;
app.listen(port)

console.log(`App running on ${port}`);
