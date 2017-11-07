var daf = require('./daf')
var db = daf('crud.db')

var cidades = [
  'Cuiabá',
  'Várzea Grande',
  'Rondonópolis',
  'Sinop',
  'Tangará da Serra',
  'Cáceres',
  'Sorriso',
  'Lucas do Rio Verde',
  'Primavera do Leste',
  'Barra do Garças',
  'Alta Floresta',
  'Pontes e Lacerda',
  'Nova Mutum',
  'Campo Verde',
  'Juína',
  'Colniza',
  'Guarantã do Norte',
  'Juara',
  'Barra do Bugres',
  'Peixoto de Azevedo'
]

function getadd(i,soma){
  if(i<20){
    db.get(cidades[i],function(err,data){
      soma += Number(data.toString())
      i++
      getadd(i,soma)
    })
  }else{
    db.close()
    console.log('a soma é '+soma)
  }
}

getadd(0,0)