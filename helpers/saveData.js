const fs = require('fs');


const saveData = (data) =>{
    const routeFile = './db/data.json';
    fs.writeFileSync(routeFile, JSON.stringify(data) );
}

module.exports = {
    saveData
}