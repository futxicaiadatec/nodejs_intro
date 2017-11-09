const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const client = dgram.createSocket('udp4');
let t0 = Date.now()

server.on('error', function(err){
  server.close();
});

server.on('close', function(){
  console.log('tchau!');
});

server.on('message', function(msg, rinfo){
  client.send(Buffer(rinfo.size+1), 41234, 'localhost',function(err,size){
    if(err){
      console.error(err)
      client.close()
      server.close()
    }else{
      console.log('size: '+size+' delta: '+(Date.now() - t0))
      t0 = Date.now()
    }
  })
});

server.on('listening', function(){
  console.log('server listening ...');
});

server.bind(41234,'127.0.0.1');

const message = Buffer(1);
client.send(message, 41234, 'localhost');