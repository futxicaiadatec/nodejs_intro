var a = '\00'
var z = '\ff'
var _ = '::'

var scheme = '\xff::habitantes::590118::Cuiabá'

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
  r.key =   '\xff::habitantes::'+e['estimativa2017']+'::'+e['cidade']
  r.value = e
  return r
})