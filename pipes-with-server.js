const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Request was made from ${req.url}`);

    /**
     * Creates headers for the client.
     * @param {number} response code
     * @param {object} A key : value pair telling the client what kind of data it       is. E.g. if responding with HTML, this would be specified here.
     */
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    let myReadStream = fs.createReadStream(`${__dirname}/dummyFiles/readMe.txt`, 'utf8');
    
    /** Pipe the readStream into the response to the client asynchronously. */
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');