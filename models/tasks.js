const fs = require('fs');
const Task = require('./task');

const routeFile = './db/data.json';

class Tasks {

    

    _listing = {};

    get getDataArr() {
        const _lists = [];
        Object.keys(this._listing).forEach( key => {
            const _tasks = this._listing[key];
            _lists.push(_tasks); 
            // console.log(key);
        });
        return _lists;
    } 

    
    
    constructor() {
        this._listing = {};
    }
    

    getTask(tasks = []){
       tasks.forEach( key => {
            this._listing[key.id] = key;
       });
    } 

    createTask( desc = ''){
        const task = new Task(desc);
        this._listing[task.id] = task; 
    }
    
}

module.exports = Tasks;