const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Olá UDP!!!');
client.send(message, 41234, 'localhost', function(err){
  client.close();
});