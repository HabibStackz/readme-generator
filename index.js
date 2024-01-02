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
    name: "githubUserName",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "projectDescription",
    message: "Please write a short description of your project: "
},
{
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i"
},
{
    type: "list",
    name: "license",
    message: "Please select a license used for this project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    
},

];

// function to write README file
function writeToFile(readme, data) {
    fs.writeFile(readme.md, data, (err)=>{
        if(err){
            console.log(err);
        }
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)

}

// function call to initialize program
init();
