const Task = require('./task');


class Tasks {
    _listado = {};
    
    constructor(){
        this._listado = {};
    }

    createTask( desc = ''){
        const task = new Task(desc);

        // Esto implica que dentro del objeto vacio que almacena la variable _listado. Vamos a tener 
        this._listado[task.id] = task;
    }
    
}

module.exports = Tasks;