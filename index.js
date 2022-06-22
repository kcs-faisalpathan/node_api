var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/healthcheck", (req, res, next) => {
    res.json("Your API is healthy!");
   });


app.get("/detail", (req, res, next) => {
    res.json("Sample API V1.0.0");
   });

module.exports = app