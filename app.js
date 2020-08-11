const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        let listar = async() => await listarTabla(argv.base, argv.limite)
        listar()
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}