var levelup = require('levelup')
var down


if(process.env.db === 'mem'){
  down = require('memdown')
}else{
  down = require('leveldown')
}


module.exports = function daf(dir){
  return levelup(down(dir))
}