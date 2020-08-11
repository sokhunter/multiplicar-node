const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crear un archivo que contiene la tabla de multiplicar segun la base y limite indicados', opt)
    .help()
    .argv;

module.exports = {
    argv
}