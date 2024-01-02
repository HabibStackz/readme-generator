const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

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

}

// function call to initialize program
init();
