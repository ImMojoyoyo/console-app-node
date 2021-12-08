// This is the library to create a new ID in our constructor.
const { v4: uuidv4} = require('uuid');

// Class Task save the same objects and his 
class Task{
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completedIn = null;
    }
}

module.exports = Task;