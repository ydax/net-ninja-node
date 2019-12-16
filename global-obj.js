// the global obj in Node.js isn't window, and there are unique methods

// log things to the terminal
console.log('howdy, Davis')

// using the setTimeout method
setTimeout(() => {
    console.log('3 seconds have passed')
}, 3000);

// setting an interval
let time = 0;
const timer = setInterval(() => {
    time+=2;
    console.log('the time is now ' + time);
    if (time > 5) {
        clearInterval(timer)
    };
}, 2000);

// return the directory I'm in
console.log(__dirname);

// return the file I'm in
console.log(__filename);