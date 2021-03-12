const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const library = require('./lib')

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const generateThis = require('./src/template-helper');
const toWrite = require('./generate-site');

const theTeam = [];

function renderInfo() {
    inquirer.prompt([{
        type: 'input',
        name: "name",
        message: "Name of Employee",
        validate: nameInfo => {
            if (nameInfo) {
                return true;
            } else {
                console.log('Name must be entered.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "email",
        message: "Please enter your e-mail address.",
        validate: emailInfo => {
            if (emailInfo) {
                return true;
            } else {
                console.log('Email address must be entered.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your ID number.",
        validate: idInfo => {
            if (idInfo) {
                return true;
            } else {
                console.log('ID must be entered.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select a role.",
        choices: ["Manager", "Employee", "Engineer", "Intern"]
    }
])
}