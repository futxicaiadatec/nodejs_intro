const dgram = require('dgram')
const s = dgram.createSocket('udp4')

s.bind(41233,'192.168.0.8', function(){
  s.addMembership('230.185.192.108', '192.168.0.8')
  s.setBroadcast(true)
  s.setMulticastLoopback(true)
  s.setMulticastTTL(128)
  s.setMulticastInterface('192.168.0.8')
  process.nextTick(function(){
    s.send(Buffer.from('ola multicast'), 41234,'230.185.192.108',function(){
      s.close()
    });
  })
})