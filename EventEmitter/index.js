var EventEmitter = require('events');

const emitter = new EventEmitter();

function host1(){
    console.log("Im the first event");
}
function host2(){
    console.log("Im the second event");
}

emitter.once('display1',host1);
emitter.on('display2',host2);
emitter.on('display2',()=>console.log('hii'));

emitter.emit('display2');
emitter.emit('display2');

console.log(emitter.listenerCount('display2'));
console.log(emitter.rawListeners('display2'));
