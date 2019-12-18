const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(`${__dirname}/dummyFiles/readMe.txt`, 'utf8');

const myWriteStream = fs.createWriteStream(`${__dirname}/dummyFiles/writeMe.txt`);

// async write -- enables users to receive data more quickly esp for big files
// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received');
//     myWriteStream.write(chunk);
// });

// using pipe instead of the .on syntax
/* Pipes are fundamentally built on top of readable streams | This does the exact same as above in likes 8-12 */
myReadStream.pipe(myWriteStream);