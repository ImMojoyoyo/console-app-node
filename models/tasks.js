const fs = require('fs');
const Task = require('./task');

const routeFile = './db/data.json';

class Tasks {

    

    _listing = {};

    get getDataArr() {
        const _lists = [];
        Object.keys(this._listing).forEach( key => {
            const task = this._listing[key];
            _lists.push( task ); 
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
    
    
    allMyTasks(){
        console.log(); // Empty space.
        this.getDataArr.forEach( (task, n) => {
                const index = `${n + 1}`.green;
                const { desc , completedIn } = task
                const state = (completedIn) 
                                    ? 'Completed'.green
                                    : 'Pending'.red
                console.log(`${index} ${desc} :: ${state}`);
        });
    }

    listTasksCompletedAndPending( completed = true){
        console.log(); // Empty space.
        let counter = 0 ;
        this.getDataArr.forEach( ( task ) => {
            const {desc , completedIn} = task;
            const state = ( completedIn )
                                ? 'Completed'.green 
                                : 'Pending'.red;

            if( completed ){
                // Show completed
                if( completedIn ){
                    counter += 1;
                    console.log(`${counter.toString().green} ${desc} :: ${state}`);
                }
            }else{
                // Show pending
                if( !completedIn ){
                    counter += 1;
                    console.log(`${counter.toString().green} ${desc} :: ${state}`);
                }
            }
        });
 
    }
    
}

module.exports = Tasks;