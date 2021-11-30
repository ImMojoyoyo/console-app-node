'use strict'

// Importamos la libreria instalada para darle color dentro de nuestra terminal.
const colors = require('colors');

// Importamos todos los modulos exportamos desde la carpeta ./helpers/messages.
const {message, pause} = require('./helpers/messages');


console.clear(); // Limpia la consola antes de comenzar el programa.

// Dentro de la constante main alamacenamos una función asíncrona.
const main = async() => {

    console.log("Hello world!");

    let opt = ''

    do{
        opt = await message();
        console.log({ opt });
        if(opt !== '0'){
            await pause();
        }
    }while(opt !== '0'); 

    
    
    

}


main(); // Llamamos a nuestra constante main, que ahora es una función por que almacena una función.