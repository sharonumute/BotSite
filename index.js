const express = require("express");
const path = require('path');
 
var app = express();
 
var server = app.listen(8081, function() {
    var address = server.address().address;
    var port = server.address().port;
    console.log("Server started at %s:%s", address, port);
});

// Homepage
app.get('/', function (req, res) {
    console.log("User is on homepage");
    res.sendFile(path.join(__dirname+'/index.html'));
});

// Simple Text display Routes
app.get('/privacy_policy', function (req, res) {
    console.log("User is on Privacy Policy Page");
    res.sendFile(path.join(__dirname+'/privacypolicy.html'));
});

app.get('/tos', function (req, res) {
    console.log("User is on Terms of Conditions Page");
    res.sendFile(path.join(__dirname+'/tos.html'));
})