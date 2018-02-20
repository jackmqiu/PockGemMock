var path = require('path');
var express = require('express');

var app = express();

app.use('/static', express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});


app.get('*', function(req, res) {
    res.redirect('/');
});


const PORT = 3005;

console.log('starting server on port: ', PORT);
app.listen(PORT);
