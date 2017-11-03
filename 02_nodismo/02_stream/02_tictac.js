const stream = require('stream')

const clock = new stream.Readable()

clock.push('tic\n')
clock.push('tac\n')
clock.push('tic\n')
clock.push('tac\n')
clock.push('tic\n')
clock.push('tac\n')
clock.push(null)

clock.pipe(process.stdout)

clock.on('data', process.stdout.write)

/**
 * Exercício
 * Alterar o código para usar setTimeout ou setInterval( f, t);
 * dica: https://devhints.io/nodejs-stream
 */
