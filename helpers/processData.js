const fs = require('fs');

const routeFile = './db/data.json';

const saveData = (data) =>{
    fs.writeFileSync(routeFile, JSON.stringify(data) );
}

const readData = () => {
    if( !fs.existsSync(routeFile)){
        return null;
    }

    const info = fs.readFileSync(routeFile, {encoding: 'utf-8'}); // Pass the route of file and the enconding to show the data.
    const _data =  JSON.parse(info); // JSON parse show the data in the json file like a json and not like a string.
    
    //console.log(_data);
    
    return _data;
}



module.exports = {
    saveData,
    readData
}