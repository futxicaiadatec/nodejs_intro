const stream = require('stream')
const clock = new stream.Readable()
let tic = true

clock._read = function(){
  setTimeout(function () {
      clock.push( tic ? 'tic\n' : 'tac\n');
      tic = !tic
  }, 1000);
}

clock.pipe(process.stdout)