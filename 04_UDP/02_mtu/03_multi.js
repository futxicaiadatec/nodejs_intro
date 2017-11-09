const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const client = dgram.createSocket('udp4');

let t = Date.now()

server.on('error', function(err){
  server.close();
});

server.on('close', function(){
  console.log('tchau!');
});

let currentSize = 1

server.on('message', function(msg, rinfo){
  client.send(Buffer(currentSize+1), 41234, 'localhost',function(err,size){
    if(err){
      console.error(err)
      client.close()
      server.close()
      console.log('total = '+(Date.now()-t))
    }else{
      console.log('size: '+size)
    }
  })
  currentSize += 1
});

server.on('listening', function(){
  console.log('server listening ...');
});

server.bind(41234,'127.0.0.1');

const message = Buffer(1);
client.send(message, 41234, 'localhost');