var daf = require('./daf')
var db = daf('matoGrosso.db')

var conf = {
  keys:     true,
  values:   true,
  gte:      'Poconé', // greater than or equal
  lt:       '\xff',
  limit:    20,
  reverse:  false
}
var dbstream = db.createReadStream(conf)

dbstream
  .on('error', console.error)
  .on('close', function () {
    console.log('close')
    db.close(console.error)
  })
  .on('end', function () {
    console.log('end')
  }).on('readable', function () {
    var key_value = dbstream.read()
    console.dir(key_value)
  })