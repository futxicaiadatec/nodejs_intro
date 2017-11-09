const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const client = dgram.createSocket('udp4');

server.on('error', function(err){
  console.log(JSON.stringify(err));
  server.close();
});

server.on('close', function(){
  console.log('tchau!');
});

server.on('message', function(msg, rinfo){
  console.log(JSON.stringify(rinfo,null,2));
  server.close();
});

server.on('listening', function(){
  console.log('server listening ...');
});

server.bind(41234,'127.0.0.1');

const message = Buffer(1);
client.send(message, 41234, 'localhost', function(err){
  client.close();
});
/*
** EXERCÍCIO
** A cada mensagem ouvida pelo servidor, devolver uma maior e imprimir no console o erro, o tamanho e o tempo entre as mensagens
*/