var CDH = require('./enterprise')

var estagiarios = []

estagiarios.push(CDH('pedro'))
estagiarios.push(CDH('felipe'))
estagiarios.push(CDH('ana'))
estagiarios.push(CDH('fernando'))

estagiarios.forEach(function(el){
  console.log(`name: "${el.name}" chefe: "${el.bossName}"`)
})
