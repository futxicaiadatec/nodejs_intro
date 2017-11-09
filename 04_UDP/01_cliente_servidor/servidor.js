const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', function(err){
  console.log(JSON.stringify(err));
  server.close();
});

server.on('close', function(){
  console.log('tchau!');
});

server.on('message', function(msg, rinfo){
  console.log(JSON.stringify(Object.assign({},rinfo,msg),null,2));
});

server.on('listening', function(){
  const address = server.address();
  console.log(`server listening ${address.family} ${address.address}:${address.port}`);
});

server.bind(41234,'127.0.0.1');