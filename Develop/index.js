const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installationInstructions, usageInformation, contributionGuidlines, test, license, email, Github}) =>
`
    ${title}
    Description: ${description}

    How to Install: ${installationInstructions}
    Usage Information: ${usageInformation}
    Contribution Guidelines: ${contributionGuidlines}
    How to test: ${test}
    License: ${license}

    About Me:
    My Github: github.com/${Github}
    My Email: ${email}

    Links: 
    Description
    Useful Stuffs
    About Me
`
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
            name: 'test',
            message: 'Enter test instructions:',
        },
        {
            type: 'list-input',
            name: 'license',
            message: 'Select a license',
            choices: ['1 year license', '3 year license', '5 year license']
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your Github username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        },
    ])
.then((answers) => {
    const READMEContent = generateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log ('Successfully created README.md!')
);
});

