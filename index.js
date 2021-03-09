// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `githubUser`,
        message: `What is your GitHub username?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your email address?`
    },
    {
        type: `input`,
        name: `title`,
        message: `What is the title of your project?`
    },
    {
        type: `input`,
        name: `desc`,
        message: `Give a brief description of your project.`
    },
    {
        type: `input`,
        name: `installation`,
        message: `What command is needed for the user to install necessary dependancies for your project?`
    },
    {
        type: `input`,
        name: `usage`,
        message: `What instructions are needed to use this project?`
    },
    {
        type: `list`,
        name: `license`,
        choices: [`MIT`, `Apache 2.0`, `GNU GPL 3.0`, `Unlicense`, `None`]
    },
    {
        type: `input`,
        name: `contributing`,
        message: `Give credit and list the GitHub usernames of any project contributors.`
    },
    {
        type: `input`,
        name: `test`,
        message: `What command is needed for the user to test your project?`
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Successfully created README file!`);
        }
    });
}
    

// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt(questions).then(responses => {
        const README = markdown(responses);
        writeToFile("generatedREADME.md", README);
    })
}

// Function call to initialize app
init(questions);
