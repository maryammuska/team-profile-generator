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
                name: 'teamMember',
                choices: ['Manager', 'Engineer' , 'Intern', 'Finish Team']
        }
    ])
    .then(function (userInput){
        console.log(userInput);
        switch (userInput.teamMember) {
            case 'Manager': managerQuestions();            
                break;
            case 'Engineer': engineerQuestions();
                break;
            case 'Intern': internQuestions();
                break;
            default: teamMembers();
        }
    })
    };

    function managerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'managerName',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'managerId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'managerOffice',
            }
        ])
        .then((data) => {
            const manager = new Manager(
                data.managerName,
                data.managerId,
                data.managerEmail,
                data.managerOffice,
            )
            arr.push(manager);
            menu();
        })
    };

    function engineerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'engineerName',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'engineerId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'emgineerEmail',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'engineerUsername',
            }
        ])
        .then((data) => {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerId,
                data.engineerEmail,
                data.engineerUsername,
            )
            arr.push(engineer);
            menu();
        })
    };

    function internQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message:'Please type in your name:',
                name:'internName',
            },
            {
                type: 'input',
                message:'What is your employee ID?',
                name:'internId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What school do you go to?',
                name: 'internSchool',
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
    };
    function teamMembers(){
        fs.writeFile('./dist/team-profile.html', generateHtml(arr), (err) =>
        err ? console.error(err) : console.log('Success! File has been created.'));
    };
    menu();
};

team();
