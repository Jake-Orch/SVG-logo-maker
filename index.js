// I am to create my inquirer input functions
// Create my color functions for both shape color and text color
// Apply my colors, to the text and shape selected by the user and add them together here
// then create the SVG file
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('max-length', MaxLengthInputPrompt);

function init () {
    inquirer.prompt([
        {
            type:'max-length',
            message:'Type 3 characters to include in your logo',
            name:'text',
            maxLength: 3
        },
        {
            type:'input',
            message:'What font color would you like to use?',
            name:'text-color'
        },
        {
            type:'list',
            message:'Pick which shape you would like your logo to take',
            name:'shape',
            choices:['Circle', 'Square', 'Triangle']
        },
        {
            type:'input',
            message:'What color would you like your shape to be?',
            name:'shape-color'
        }
    ])
};

init();