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

// Main function
const main = async() => {
    // Variable empty save the value of input
    let option = '' 
    
    // Object
    const _tasks = new Tasks();
    // Database 
    const _taskDb = readData(); 

    // Condition to know if the DB have data and get it.
    if( _taskDb ){
        _tasks.getTask( _taskDb );
    } 
    
     
    // Condition / Loop
    do{
        console.clear(); // Clear Terminal
        option = await inquirerMenu(); // Option Value from Terminal.
        
        // Condition
        // Some 'option' in the last varible make something on the condition.
        switch (option) {
            case '1':
                const desc = await readInput('Description: '); // Read Input
                _tasks.createTask(desc); // Create Task
            break;

            case '2':
                _tasks.completedTasks();
            break;

            case '3':
                _tasks.listTasksCompletedAndPending(false);
            break;

            case '4':
                _tasks.listTasksCompletedAndPending(true);
            break;
            /* 
            case '5':
                _tasks.listTasksCompletedAndPending(true);
            break; */
        }

        // Save data in the file.
        //await saveData( _tasks.getDataArr );

        // Pause to continue.
        await pause();

        if(option === '0'){ break }
        
    }while(option !== '0'); 
}


main(); // Llamamos a nuestra constante main, que ahora es una función por que almacena una función.