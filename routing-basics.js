const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(`Request received from ${request.url}`);
    if (request.url === '/home' || request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/index.html`).pipe(response);
    } else if (request.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/contact.html`).pipe(response);
    } else if (request.url === '/api') {
        /** Normally, I'd get the data from something like a Firestore */
        let ninjas = [{ name: 'davis', belt: 'orange', age: 36 }, { name: 'ludell', belt: 'green', age: 32 }]
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(ninjas));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/notFound.html`).pipe(response);
    };
});

server.listen(3000, '127.0.0.1');
console.log(`Server is listening on port 3000`);