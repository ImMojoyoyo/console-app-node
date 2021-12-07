// Importamos la libreria instalada para darle color dentro de nuestra terminal.
require('colors');

// Importamos todos nuestros modulos:
const { inquirerMenu, 
        pause,
        readInput 
} = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/processData');
const Tasks = require('./models/tasks');

console.clear();

// Dentro de la constante main alamacenamos una función asíncrona.
const main = async() => {
    let option = ''
    const _tasks = new Tasks(); // object

    const _taskDb = readData(); // database

    if( _taskDb ){
        _tasks.getTask( _taskDb );
    } 
    
    await pause();   
     


    do{
        console.clear();
        option = await inquirerMenu();
        
        
        switch (option) {
            case '1':
                const desc = await readInput('Description: ');
                //console.log(desc);
                _tasks.createTask(desc);
            break;

            case '2':
               console.log( _tasks.getDataArr );
            break;
        }

        //await saveData( _tasks.getDataArr );

        await pause();

        if(option === '0'){ break }
        
    }while(option !== '0'); 
}


main(); // Llamamos a nuestra constante main, que ahora es una función por que almacena una función.