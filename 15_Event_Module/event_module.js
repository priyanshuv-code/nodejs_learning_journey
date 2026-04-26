// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on('greet',()=>{
//   console.log('Hello Priyanshu');
// });

// event.emit('greet');

const EventEmitter = require('events');

const event = new EventEmitter();

// define event
event.on('greet', () => {
    console.log('Hello Priyanshu');
});
// trigger event
event.emit('greet');