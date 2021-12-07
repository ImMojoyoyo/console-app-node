const fs = require('fs');

const routeFile = './db/data.json';

const saveData = (data) =>{
    fs.writeFileSync(routeFile, JSON.stringify(data) );
}

const readData = () => {
    if( !fs.existsSync(routeFile)){
        return null;
    }

    const info = fs.readFileSync(routeFile, {encoding: 'utf-8'});
    const _data =  JSON.parse(info);
    
    console.log(_data);
    
    return _data;
}



module.exports = {
    saveData,
    readData
}