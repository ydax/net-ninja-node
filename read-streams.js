const http = require('http');
const fs = require('fs');

// create a readable stream @param = the file I want to stream
const myReadStream = fs.createReadStream(`${__dirname}/dummyFiles/readMe.txt`)
// gets the current directory --------------^