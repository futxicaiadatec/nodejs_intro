const dgram = require('dgram')
const curioso = dgram.createSocket({type:"udp4", reuseAddr:true})

const broadcast = '192.168.0.255'

curioso.on('message', function(msg, rinfo){
  console.log(JSON.stringify(Object.assign({},rinfo,msg),null,2));
})

curioso.on('listening', function () {
  const address = curioso.address()
  console.log('escutando em ' + address.address + ":" + address.port + ' '+address.family)
})

curioso.bind(41234,broadcast)