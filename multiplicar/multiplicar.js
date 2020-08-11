const fs = require('fs'); // viene propio en node
const colors = require('colors');

// const fs = require('express') // paquetes que se instalan
// const fs = require('./express') // archivos propios

let listarTabla = async(base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error(`El valor introducido no es un numero`);
    }
    console.log('======================================='.green);
    console.log(`============= Tabla del ${base} =============`.green);
    console.log('======================================='.green);


    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${i * base}\n`;
    }
    return { data }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}