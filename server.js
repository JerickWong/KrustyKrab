var fs = require('fs')
var words = fs.readFileSync('sample.json')
console.log('words')

var express = require('express')
var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening. . . ") 
}

app.use(express.static('website'));

