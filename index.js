// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    // gets the title of the project for the readme
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    // app description
    {
        type: "input",
        name: "description",
        message: "Enter your app description."
    },

    // installation instructions

    {
        type: "input",
        name: "installation",
        message: "Please enter instructions for your app installation."
    },

    // usage instructions
    
    {
        type: "input",
        name: "usage",
        message: "Enter your apps usage instructions"
    },

    // contribution instructions

    {
        type: "input",
        name: "contribution",
        message: "Enter contribution instructions for other users"
    },

    // test instructions

    {
        type: "input",
        name: "testInstructions",
        message: "Enter instructions for testing your app."
    },

    // license type

    {
        type: "list",
        name: "license",
        message: "What license type are you using?",
        choices: ["Apache 2.0", "Unilicense", "MIT", "Boost Software License", "IBM Public License", "none"]
    },

    // user name for github

    {
        type: "input",
        name: "githubName",
        message: "Enter your github profile name."
    },

    // email for questions

    {
        type: "input",
        name: "contactInfo",
        message: "Enter your email where users can reach out with questions."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDownText = markDown.generateMarkdown(data);

    fs.writeFile(fileName, markDownText, (err) => {
        err ? console.log(err) : console.log("readme generated!");
    });
}

// TODO: Create a function to initialize app
const init = async() => {
    try{
        const data = await inquirer.prompt(questions)

        .then((data) => {
            writeToFile("readme.md", data);
        })
    }
    catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
