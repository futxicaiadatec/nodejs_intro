const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

const nextdoor = ["::","::","::","::","::"]
let idx = 0

socket.bind(41234);

socket.on('error', console.error);

socket.on('close', function(){
  console.log('tchau!');
});


socket.on('listening', function(){
  console.log('server listening ...');
});

socket.on('message', function(msg, rinfo){
  const query = rinfo.address +':'+ rinfo.port + ':'
  if(nextdoor.includes(query)){
    console.log(query+' wait');
  }else{
    socket.send(nextdoor.join(),rinfo.port,rinfo.address)
    console.log(query+' over '+ nextdoor[idx])
    nextdoor[idx] = query
    idx = idx+1>4 ? 0 : idx+1
  }
});
/*
** EXERCÍCIO
** escrever um cliente que envie um pacote udp para o servidor e receba uma string contendo o ip:porta: concatenados dos ultimos 5 que também fizeram isso
*/