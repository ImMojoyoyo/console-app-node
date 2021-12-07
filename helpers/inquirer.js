const inquirer = require('inquirer'); // Permite interactuar con la consola.
const colors = require('colors');


const questionsInquire = [
    {
        type: 'list',
        name : 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create task`
            },
            {
                value: '2',
                name: `${'2.'.green} List task`
            },
            {
                value: '3',
                name: `${'3.'.green} List all the tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} For done`
            },
            {
                value: '5',
                name: `${'5.'.green} Done`
            },
            {
                value: '6',
                name: `${'6.'.green} Remove`
            },
            {
                value : '0',
                name : `${'0.'.green} Exit`
            }
        ]
        
    }
];






const inquirerMenu = async() => {
        console.log("=======================".yellow);
        console.log("   Select an option    ");
        console.log("=======================".yellow);

        const { option }  = await inquirer.prompt(questionsInquire);
        return option ;

}

const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name : 'desc',
            message : message,
            validate( value ) {
                if(value.length === 0){
                    return 'Please insert a value';
                }
                return true;
            }
        }
    ];

    const   {desc}   = await inquirer.prompt(question);
    return desc;

}

const pause = async() =>{
    const inputInquirer = [
        {
            type: 'input',
            name : 'answer_user',
            message : `\nPress ${ 'ENTER'.green } to continue\n`
        }
    ];

    const answer = await inquirer.prompt(inputInquirer);
    console.log('\n');
    return answer;

}


module.exports = {
    inquirerMenu,
    pause,
    readInput
}