var events = require('events');
var e = new events.EventEmitter();

function say(data){
  console.log("Hello " + data)
  e.emit('done')
}

e.on('say', say);

e.on('done', function(){
  console.log('Message done');
})

e.emit('say', 'world');

console.log('Program done');
