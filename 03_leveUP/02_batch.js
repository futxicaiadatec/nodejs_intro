var daf = require('./daf')
var db = daf('crud_series.db')
var Stream = require('stream')

var ops = [
  { type: 'put', key: 'uuuuu', value: 'null or undefined will return an error' },
  { type: 'put', key: 'iiiii', value: 'although as a whole they are performed as an atomic operation inside the underlying store' },
  { type: 'put', key: 'aaaaa', value: 'batch() can be used for very fast bulk-write operations (both put and delete)' },
  { type: 'put', key: 'eeeee', value: 'The array argument should contain a list of operations to be executed sequentially' },
  { type: 'put', key: 'ooooo', value: 'In the case of \'del\' the value property is ignored.' }
]

db.batch(ops, console.error)

var btch = db.batch()
btch.put('bbbbb', 'batch.put(key, value)')
    .put('ccccc', 'batch.del(key)')
    .put('ddddd', 'batcj.clear()')
    .put('fffff', 'batcj.length')

btch.del('ddddd').del('fffff')
    
btch.put('ddddd', 'batch.clear()').put('fffff', 'batch.length')

if(btch.length > 0){
  btch.clear()
}

btch.put('z01', '')
    .put('z02', '')
    .put('z03', '')
    .put('z04', 'batch(), when called with no arguments will return a Batch object')
    .put('z05', 'which can be used to build, and eventually commit, an atomic batch operation.')
    .put('z06', '')
    .put('z07', 'Depending on how it\'s used, it is possible to obtain greater performance')
    .put('z08', 'when using the chained form of batch() over the array form.')
    .put('z09', '')
    .put('z10', 'All operations not cleared will be written to the underlying store atomically,')
    .put('z11', 'that is, they will either all succeed or fail with no partial commits.')

btch.write()


/**
 * EXERCÍCIO
 * 1) maper as cidades p/ formato aceito pelo bath
 * 2) escrever uma função que receba este array de operações, um db e retorne o batch buferizado para write()
*/

var dbstream = db.createReadStream()
dbstream.on('readable', function () {
    var key_value = dbstream.read();
    console.dir(key_value);
});
