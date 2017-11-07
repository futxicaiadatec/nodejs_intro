var Stream = require('stream')

function conteQuantas(mark){
  return function(str){
    var n=-1
    var i=0
    var notFirst = 0
    while(i !== -1){
      n++
      i = str.indexOf(mark,i+notFirst*mark.length)
      notFirst = 1
    }
    return n
  }
}

module.exports = function (conf){
  if(conf.open !== conf.close){
    const trans = new Stream.Transform({objectMode: true})
    let data = ""
    let delta = 0
    
    const no = conteQuantas(conf.open)
    const nc = conteQuantas(conf.close)
    
    trans._transform = function(chunk,enc,done){
      data += chunk.toString()
      delta = no(data) - nc(data)
      if(delta === 0){
        done(null,data)
      }else{
        done(null,Buffer(1))
      }
    }
    
    return trans
  }else{
    return Error('open deve ser diferente de close')
  }
}