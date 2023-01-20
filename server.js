const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    res.send("Hello world!")
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
})