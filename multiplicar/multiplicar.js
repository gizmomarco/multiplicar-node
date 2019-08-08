const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base*x}\n`;
        }
        fs.writeFile(`tablas/${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`${base}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`==Tabla del ${ base }==`.green);
    console.log('=================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base*x}\n`;
        }
        console.log(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}