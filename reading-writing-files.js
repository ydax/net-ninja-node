// import the file system module
const fs = require('fs');

// go and read a file, store it in a variable 
// note: sync = synchronous, meaning the code is blocked until this action is complete
const readMe = fs.readFileSync('./dummyFiles/readMe.txt', 'utf8')
// 1st is file path -----------^ encoding method -^

// write the file
fs.writeFileSync('./dummyFiles/writeMe.txt', readMe)
// new file ------^               what to put --^

// ASYNC VERSION OF READING, WRITING -- this is what I should use

// reading
fs.readFile('./dummyFiles/readme.txt', 'utf8', (error, data) => {
    // writing
    fs.writeFile('./dummyFiles/writeme2.txt', data, (error) => {
        // with async, I must include a callback -----^
        if (error) {
            console.log(error);
        };
    });
});

// delete a file
fs.unlink('./dummyFiles/writeMe.txt', (error) => {
    if(error) throw error;
    console.log('file deleted');
});

// DIRECTORIES

// creating a directory (synchronous)
fs.mkdirSync('./dummyFiles/exampleDirectory');
// removing a directory (synchronous)
fs.rmdirSync('./dummyFiles/exampleDirectory');


// creating a directory async
fs.mkdir('./dummyFiles/exDirAsync', () => {
    fs.readFile('./dummyFiles/readme.txt', 'utf8', (error, data) => {
        if (error) throw error;
        fs.writeFile('./dummyFiles/exDirAsync/writeMe3.txt', data, (error) => {
            if (error) throw error;
            console.log('all done!')
        })
    })
})