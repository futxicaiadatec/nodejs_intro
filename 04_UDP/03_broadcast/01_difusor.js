const dgram = require('dgram')
const difusor = dgram.createSocket('udp4')

const msg = Buffer.from('Olá broadcast')
const broadcast = '192.168.0.255'

difusor.bind(function() {
  difusor.setBroadcast(true)
})
difusor.send(msg, 41234, broadcast, function(err,size){
  if(err){
    console.error(err)
  }else{
    console.log('difundido '+size+' bytes')
  }
  difusor.close()
})