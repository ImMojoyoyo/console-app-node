const Task = require('./task');


class Tasks {
    _listing = {};
    
    constructor(){
        this._listing = {};
    }
    
    get saveData(){
        const _lists = [];
        Object.keys(this._listing).forEach( key => {
            const _tasks = this._listing[key];
            _lists.push(_tasks);
        });
        return _lists;
    }


    createTask( desc = ''){
        const task = new Task(desc);

        // Esto implica que dentro del objeto vacio que almacena la variable _listing. Vamos a tener 
        this._listing[task.id] = task;
    }
    
}

module.exports = Tasks;