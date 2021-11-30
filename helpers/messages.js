const { rejects } = require('assert');
const colors = require('colors');
const { resolve } = require('path');

// 01
// Primer modulo a exportar
// Almacenamos dentro de la constante 'message' toda la función que vamos a querer exportar 
const message = () => {
    
    // Para crear una nueva promesa la retornamos completamente a la constante que la almacena así nuestra función será 100% asíncrona.
    return new Promise( (resolve, reject) => {

        console.clear();
        console.log("=======================".yellow);
        console.log("   Select an option    ");
        console.log("=======================".yellow);


        console.log(`${'1.'.yellow} Crear una tarea`);
        console.log(`${'2.'.yellow} Listar tarea`);
        console.log(`${'3.'.yellow} Listar tareas completadas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'5.'.yellow} Completar tarea(s)`);
        console.log(`${'6.'.yellow} Borrar tarea(s)`);
        console.log(`${'0.'.yellow} Salir \n`);

        /* Solicitamos readLine que nos permite crear I/O en nuestra terminal Node.js */
        // Nos permite crear un stdin stout en NodeJS, la Interface nos permitirá escribir o visualizar una nueva linea en la terminal.
        const readLine = require('readline').createInterface({
            input: process.stdin,  // Linea que ingresa datos
            output: process.stdout // Linea que exporta datos
        });

        readLine.question("Select an option: ", (option) => {
            readLine.close(); // Cerramos la linea para ingresar datos
            resolve(option); // Callback promesa obtiene un parametro tipo string
        });


    });
    
    
}


//02
// Segundo módulo a exportar
const pause = () => {

    return new Promise ( (resolve, reject) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPress ${ 'ENTER'.green } to continue\n`, (opt) => {
            readLine.close();
            resolve();
        });

    });
    
}

module.exports = {
    message, 
    pause

}