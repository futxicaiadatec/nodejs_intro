var levelup = require('levelup')
var encode = require('encoding-down')
var down
// encoding-down

if(process.env.db === 'mem'){
  down = require('memdown')
}else{
  down = require('leveldown')
}


module.exports = function daf(dir){
  return levelup(encode(down(dir)))
}