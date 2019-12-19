const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(`Request received from ${request.url}`);
    response.writeHead(200, {'Content-Type': 'application/json'});
    const myObject = {
        name: 'Davis',
        job: 'Digital Baller',
        age: 36
    };

    /** Respond to client request with a stream or a buffer. 
    Will need to stringify JSON data before sending response. */
    response.end(JSON.stringify(myObject));
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');