var tap = require('tap')
var daf = require('../daf')

tap.test('testando se o módulo daf constroi o diretório de dados', function (it) {
  var db = daf('local.db')
  it.equal(Object.getPrototypeOf(db).toString(), 'LevelUP', 'A prototype está estranha')
  console.log(db.db.location)
  setTimeout(function(){
    it.equal(db.db.location, 'local.db', 'a locação do diretório de dados está estranha')
    it.end()
  }, 100);
})