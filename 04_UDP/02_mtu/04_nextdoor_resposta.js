const socket = require('dgram').createSocket('udp4');

socket.bind(Number(process.argv[2]) || 41111);

socket.on('error', console.error);

socket.on('listening', function(){
  const sinfo = socket.address();
  console.log('server listening '+sinfo.address+':'+sinfo.port);
})

socket.on('message', function(msg, rinfo){
  console.log(rinfo.address+':'+rinfo.port+msg.toString())
})

const msg = Buffer(1);
socket.send(msg,41234,'192.168.x.y')