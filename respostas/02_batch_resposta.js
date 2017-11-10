var matoGrosso = [
  {
    "cidade": "Cuiabá",
    "censo2010": "551350",
    "estimativa2017": "590118"
  }
]

var ops = exemplo.map(e=>{
  r = {
    type:'put'
  }
  r.key =   e['cidade']
  r.value = e['estimativa2017']
  return r
})

function ops2buff(db,ops){
  return ops.reduce(function(btch,op){
    if(op.type === 'put'){
      btch.put(op.key,op.value)
    }else if(op.type === 'del'){
      btch.del(op.key)
    }
    return btch
  },db.batch())
}