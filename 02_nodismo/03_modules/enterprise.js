var boss = {
  bossName: 'el fodón'
}

module.exports = function(tname){
  var trainee = {}
  trainee.name = tname
  
  var agreement = Object.create(boss)
  
  return Object.assign(agreement,trainee)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
