const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    console.log("Buttonclick received!")
    const url = "https://zenquotes.io/api/random"
    https.get(url, function(response){
        response.on("data", function(data){
            const quoteData = JSON.parse(data);
            const quote = quoteData[0].q;
            const author = quoteData[0].a;
            res.send("<h1>" + quote + "<h1> <br> <h2> - " + author + "<h2>")
        })
    })
})


app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
})