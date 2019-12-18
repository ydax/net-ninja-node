const http = require('http');
const fs = require('fs');

/* create a readable stream (which is an async way of accessing data) | @param1 = the file I want to stream @param2 = encoding method (optional) | note that the createReadStream method inherits from the EventEmitter and has a property called data that can tell a listener whenever a chunk of data is ready */
const myReadStream = fs.createReadStream(`${__dirname}/dummyFiles/readMe.txt`, 'utf8');
// gets the current directory --------------^

myReadStream.on('data', (chunk) => {
// 'chunk' by convention --^
    console.log('new chunk received');
    console.log(chunk);
});