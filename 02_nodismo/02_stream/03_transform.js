var Stream = require('stream')
var entrada = process.stdin
var saida = process.stdout

var lengths = []
var Transform = new Stream.Transform({objectMode: true})

Transform._transform = function(chunk,enc,done){
  var data = chunk.toString()
  lengths.push(data.length)
  var strlen = JSON.stringify(lengths,null,2)+"\n"
  done(null,strlen)
}

entrada.pipe(transform).pipe(saida)
