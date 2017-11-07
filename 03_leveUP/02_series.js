var begin = String.fromCharCode(0)
var end = String.fromCharCode(126)
//

var trans = new Stream.Transform({objectMode: true})

trans._transform = function(chunk,enc,done){
  var data = chunk.toString()
  lengths.push(data.length)
  var strlen = JSON.stringify(lengths,null,2)+"\n"
  done(null,strlen)
}
