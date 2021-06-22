const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
let employee;
let man;
let employees = [];

function promptUser() {
    return inquirer.prompt([
        {
            name: 'name',
            message: `What is the ${employee}'s name? \n`,
            type: 'input'
        },
        {
            name: 'id',
            message: `What is the ${employee}'s id? \n`,
            type: 'input'
        },
        {
            name: 'email',
            message: `What is the ${employee}'s email? \n`,
            type: 'input'
        }
    ])
}

async function manPrompt() {
    employee = "manager";
    const answer = await promptUser();
    
    inquirer.prompt([
        {
            name: 'officeNum',
            message: "What is the manager's office number? \n",
            type: 'input'
        }
    ]).then(manAnswer => {
        const {name, id, email} = answer;
        man = new Manager(name, id, email, manAnswer.officeNum);
        newEmp();
    })
}

function newEmp() {
    inquirer.prompt([
        {
            name:'employee',
            message: 'Would you like to add another employee to the team?',
            type: 'confirm'
        }
    ]).then(answer => {answer.employee ? whichEmp() : finished()});
}

function whichEmp() {
    inquirer.prompt([
        {
            name:'employee',
            message: 'Which employee would you like to add?',
            type: 'list',
            choices: ['Intern', 'Engineer']
        }
    ]).then(answer => {
        if (answer.employee === 'Engineer') {
            engiPrompt();
        } else {
            intPrompt();
        }
    });
}

async function engiPrompt() {
    employee = "engineer";
    const answer = await promptUser();
    inquirer.prompt([
        {
            name: 'gitHub',
            message: `What is the ${employee}'s GitHub username? \n`,
            type: 'input'
        }
    ]).then(engiAnswer => {
        const {name, id, email} = answer;
        employees.push(new Engineer(name, id, email, engiAnswer.gitHub));
        newEmp();
    })
}

async function intPrompt() {
    employee = "intern";
    const answer = await promptUser();
    inquirer.prompt([
        {
            name: 'school',
            message: `What is the ${employee}'s school? \n`,
            type: 'input'
        }
    ]).then(intAnswer => {
        const {name, id, email} = answer;
        employees.push(new Intern(name, id, email, intAnswer.school));
        newEmp();
    })
}

function finished() {
    generateHTML();
}

function generateHTML() {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body style="min-width: 300px;">
    <header class="jumbotron bg-danger" style="text-align: center; border-radius: 0px; width: 100%;">
        <h1 class="text-white">My Team</h1>
    </header>

    <main>
        <div class="row" style="justify-content: center;">
            <div class="card mr-5 mb-4" id="man" style="width: 16rem; border-top-right-radius: 7px; border-top-left-radius: 7px;">
                <div class="card-body bg-primary" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">
                    <h3 class="card-title text-white">${man.getName()}</h3>
                    <h4 class="card-text text-white">${man.getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${man.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${man.getEmail()}">${man.getEmail()}</a></li>
                    <li class="list-group-item" style="border-bottom-left-radius: 7px; border-bottom-right-radius: 7px;">Office Number: ${man.getOfficeNum()}</li>
                </ul>
            </div>`;

    for (i of employees) {
        if (i instanceof Engineer) {
            html += `\n<div class="card mr-5 mb-4" id="man" style="width: 16rem; border-top-right-radius: 7px; border-top-left-radius: 7px;">
            <div class="card-body bg-primary" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">
                <h3 class="card-title text-white">${i.getName()}</h3>
                <h4 class="card-text text-white">${i.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${i.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${i.getEmail()}">${i.getEmail()}</a></li>
                <li class="list-group-item" style="border-bottom-left-radius: 7px; border-bottom-right-radius: 7px;">Github: <a href="https://www.github.com/${i.getGithub()}">${i.getGithub()}</a></li>
            </ul>
        </div>`
        } else {
            html += `\n<div class="card mr-5 mb-4" id="man" style="width: 16rem; border-top-right-radius: 7px; border-top-left-radius: 7px;">
            <div class="card-body bg-primary" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">
                <h3 class="card-title text-white">${i.getName()}</h3>
                <h4 class="card-text text-white">${i.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${i.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${i.getEmail()}">${i.getEmail()}</a></li>
                <li class="list-group-item" style="border-bottom-left-radius: 7px; border-bottom-right-radius: 7px;">School: ${i.getSchool()}</li>
            </ul>
        </div>`
        }
    }
    html += `\n</div>
    </main>

</body>
</html>`;
    fs.writeFileSync('./dist/index.html', html);
    console.log("Finished!");
}

manPrompt();