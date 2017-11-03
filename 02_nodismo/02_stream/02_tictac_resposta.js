const clock = new require('stream').Readable()
let tic = true
clock._read = function(){}

const b = new Buffer(1)

setInterval( function(){
  clock.push(b)
}, 1000)

clock.on('data', function(){
  if(tic){
    process.stdout.write('tic\n')
  }else{
    process.stdout.write('tac\n')
  }
  tic = !tic
})
