const fs = require('fs')
const inquirer = require('inquirer');
const jest = require('jest')

const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

const generatePage = require('./src/template-helper')

const writeHTML = require('./generate-site')

const team = []

function collectInfo() {
    inquirer.prompt([{
                type: 'input',
                name: "name",
                message: "Please enter employee's name.",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('An employee name must be entered.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: "email",
                message: "Please enter an email address.",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('An email address must be entered.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter employee ID.",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('An employee ID must be entered.')
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: "Employee Role",
                choices: ["Manager", "Employee", "Engineer", "Intern"]
            }
        ])
        .then(answers => {   
            if (answers.role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'gitHub',
                    message: "Please enter engineer's gitHub username.",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            console.log('A gitHub username must be entered.')
                            return false;
                        }
                    }
                }])
                .then(ans => {
                    console.log(ans.gitHub)
                
                    const teamEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, ans.gitHub )
                    team.push(teamEngineer);
                    addMore()
                })
            } else if(answers.role === 'Manager') {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'officeNumber',
                        message: "Please enter the manager's office number.",
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                console.log('A manager office number must be entered')
                                return false;
                            }
                        }
                    }])
                    .then(ans => {
                        console.log(ans.officeNumber)
                    
                        const teamManager = new Manager(answers.name, answers.email, answers.id, answers.role, ans.officeNumber)
                        team.push(teamManager);
                        addMore()
                    })
                } else if(answers.role === 'Intern') {
                        inquirer.prompt([{
                            type: 'input',
                            name: 'school',
                            message: "Please enter intern's school.",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('A school name must entered.')
                                    return false;
                                }
                            }
                        }])
                        .then(ans => {
                                                    
                            const teamIntern = new Intern(answers.name, answers.email, answers.id, answers.role, ans.school )
                            team.push(teamIntern);
                            addMore()
                        })
            }else{
                const teamEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
                team.push(teamEmployee)
                addMore()
            }
            
            function addMore() {
                inquirer.prompt([{
                    type: 'confirm',
                    name: 'addNew',
                    message: 'Would you Like to add another team member?'
                }])
                .then(res =>{
                    if (res.addNew === true){
                        collectInfo(team)
                    }else{
                        console.log('team', team)
                        let cardsHTML = generatePage(team)
                        writeHTML(cardsHTML)
                        
                    }
                    
                })
                
            }
                
        })
}



collectInfo();