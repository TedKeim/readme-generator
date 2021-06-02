function init () {

const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./develop/generateMarkdown.js");
const path = require('path');

inquirer
    .prompt([
        {
    type: 'input',
    message: 'What is the title for your project?',
    name: 'title',
},

{
    type: 'input',
    message: 'Write a descirption of your project.',
    name: 'description',
},

{
    type: 'input',
    message: 'Provide a step by step explanation on how to install your project.',
    name: 'install',
},

{
    type: 'input',
    message: 'Provide a link to your project.',
    name: 'link',
},

{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
},

{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},

{
    type: 'input',
    message: 'Provide instructions on how to run your project.',
    name: 'instructions',
},

{
    type: 'list',
    message: 'What license did you use for your project?',
    choices: ["MIT", "GNU", "Apache", "Academic", "ISC", "Mozilla", "Open", "No License"],
    name: 'license',
},

{
    type: 'input',
    message: 'How can people contribute to your project?',
    name: 'contribute',
},
{
    type: 'input',
    message: 'If there are any collaborators that also worked on your project list their Github usernames.',
    name: 'collaborators'
},

    ])
    .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
    });
}

init();