var daf = require('./daf')
var db = daf('crud.db')

db.put('criandoNovaChave','comValorAssociado')
db.put('criandoNovaChave2','comValorAssociado2')
db.put('criandoChave3','este valor vai ser sobreescrito. Adeus, tchau' )
db.put('criandoChave3','comValorAssociado3' )

db.del('criandoNovaChave')

db.get('criandoChave3',function(err,buffer){
  if(err){
    console.error(err)
  }else{
    console.log(buffer.toString())
    db.close(console.error)
  }
})

/*
  EXERCÍCIO 1
  criar um script pra tentar ler a chave "criandoNovaChave" e imprimir o erro
  
  EXERCÍCIO 2
  a) Criar um diretório de dados 'matoGrosso.db' e salvar a população de todas as cidades
  b) Ler do diretório as 20 cidades mais populosas e imprimir a soma
*/