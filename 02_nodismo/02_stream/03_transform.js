var Stream = require('stream')
var entrada = process.stdin
var saida = process.stdout

var lengths = []
let count = 0
var transform = new Stream.Transform({objectMode: true})

transform._transform = function(chunk,enc,done){
  var data = chunk.toString()
  lengths.push(data.length)
  var strlen = JSON.stringify(lengths,null,2)
  done(null,strlen)
}

entrada.pipe(transform).pipe(saida)
