const http = require('http');

/* Whenver a req is sent to this server, the res is going to fire. The req
obj comes with a bunch of data I can use to calibrate my response */
const server = http.createServer((req, res) => {
    console.log(`Request was made from ${req.url}`)
    // writing a response header @1 status, @2 obj w/ content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // end() causes the response to be sent @ = data to send
    res.end('Howdy Dax');

});

// set up the listening parameters for this server
// @1 = port number, @2 = ip address
server.listen(3000, '127.0.0.1');

// best practice to log that the server is listening
console.log('Now listening to port 3000');