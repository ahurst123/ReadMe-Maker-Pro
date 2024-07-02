const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter desciption of project:',
        },
        {
            type: 'input',
            name:'installationInstructions',
            message:'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter test instructions:',
        },
        {
            type: 'list-input',
            name: 'license',
            message: 'Select a license',
            choices: ['1 year license', '3 year license', '5 year license']
        }
    ])

