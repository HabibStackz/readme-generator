const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},

{
    type: "input",
    name: "projectSummary",
    message: "Please write a SHORT description of your project: "
},

{
    type: "input",
    name: "projectDescription",
    message: "Please write a DETAILED description of your project: "
},

{
    type: "input",
    name: "features",
    message: "What are the key features of your project?",
},

{
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
},

{
    type: "input",
    name: "dependencies",
    message: "What dependencies are required for this project to run?",
},

{
    type: "list",
    name: "license",
    message: "Please select a license you want to use for this project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    default: "MIT"
    
},

{
    type: "input",
    name: "usage",
    message: "Describe how to use your project:"
},

{
    type: "input",
    name: "githubUserName",
    message: "What is your github username?"
},

{
    type: "input",
    name: "author",
    message: "What is your name?"
},

{
    type: "input",
    name: "email",
    message: "What is your email address?"
},

{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test"
},
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err);
        } else {
            console.log(`README.md successfully created as ${fileName}`);
        }
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readMeContent = generateMarkdown(data);

        writeToFile("README.md", readMeContent)
    })

}

// function call to initialize program
init();
