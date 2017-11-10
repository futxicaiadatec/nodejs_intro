/*
For the novices like me, client.bind(PORT,HOST); is the important bit. I couldn't get the client to receive anything when bound to HOST=127.0.0.1, but worked when the IP address was used. Again, HOST if excluded, the example won't work when testing using a single machine (client will throw EADDRINUSE error)
*/
const dgram = require('dgram')
const s = dgram.createSocket('udp4')

s.on('listening', function () {
    const address = s.address();
    console.log('escutando em ' + address.address + ":" + address.port + ' '+address.family);
    s.setBroadcast(true)
    s.setMulticastLoopback(true)
    s.setMulticastTTL(128);
    s.addMembership('230.185.192.108');
})

s.on('message', function(msg, rinfo){
  console.log(rinfo.address+rinfo.port+' '+rinfo.family+' ->'+msg.toString());
})

s.bind(41233,'192.168.0.8')