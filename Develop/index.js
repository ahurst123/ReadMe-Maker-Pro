const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Enter project title:'
        }
    ])
    