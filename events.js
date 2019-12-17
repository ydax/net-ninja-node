// pull in the event core module
const events = require('events');

// create a Person class and extending the events.EventEmitter class
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
} 

const davis = new Person('davis');
const ludell = new Person('ludell');
const pat = new Person('pat');

var people = [davis, ludell, pat];

people.forEach(person => {
    person.on('speak', (message) => {
        console.log(`${person.name} said ${message}`);
    })
});

davis.emit('speak', 'hey everyone!')
pat.emit('speak', 'it\'s nice to meet you')