const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require("fs");
const generateHtml = require('./src/generateHtml.js');

const arr = [];

function team() {
    function menu() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Do you want to add an engineer, intern, or finish the team?:',
                name: 'menu',
                choices: ['Engineer' , 'Intern', 'Finish Team']
        }
    ])
    .then(function (userInput){
        switch (userInput.userChoice) {
            case 'Manager': createManager();            
                break;
            case 'Engineer': createEngineer();
                break;
            case 'Intern': createIntern();
                break;
            default: teamMembers();
        }
    })
    }

    function managerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'name',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'id',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'office',
            }
        ])
        .then((data) => {
            const manager = new Manager(
                data.managerName,
                data.managerId,
                data.managerEmail,
                data.managerOfNum,
            )
            arr.push(manager);
            menu();
        })
    }

    function engineerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'name',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'id',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'username',
            }
        ])
        .then((data) => {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerId,
                data.engineerEmail,
                data.githubName,
            )
            arr.push(engineer);
            menu();
        })
    }

    function internQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'name',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'id',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What school do you go to?',
                name: 'school',
            }
        ])
        .then((data) => {
            const intern = new Intern(
                data.internName,
                data.internId,
                data.internEmail,
                data.internSchool,
            )
            arr.push(intern);
            menu();
        })
    }
    function teamMembers(){
        fs.writeFile('./dist/team-profile.html', generateHtml(arr), (err) =>
        err ? console.error(err) : console.log('Success! File has been created.'));
    }
    menu();
}

team();
