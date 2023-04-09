// I am to create my inquirer input functions
// Create my color functions for both shape color and text color
// Apply my colors, to the text and shape selected by the user and add them together here
// then create the SVG file
const inquirer = require('inquirer');
const fs = require('fs');
const isColor = require('is-color');
const { Circle, Square, Triangle } = require('./lib/shapes');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('max-length', MaxLengthInputPrompt);

//This function prompts the user with a set of 4 questions, to aquire all the necessary infotmation to create a logo how they would like
function init() {
    inquirer.prompt([
        {
            type: 'max-length',
            message: 'Type 3 characters to include in your logo',
            name: 'text',
            // This maxLength section, aquired by "inquirer-maxlength-input-prompt" is a good way of ensuring that the user doesnt input any more than 3 characters when making their logo
            maxLength: 3
        },
        {
            type: 'input',
            message: 'What font color would you like to use?',
            name: 'textColor',
            // This if statement is to make sure that the color the user types in is infact a color, so that the file can be created properly
            validate: textColor => {
                if (isColor(textColor)) {
                    return true
                } else {
                    return 'invalid'
                }
            }
        },
        {
            type: 'list',
            message: 'Pick which shape you would like your logo to take',
            name: 'shape',
            choices: ['Square', 'Circle', 'Triangle']
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be?',
            name: 'shapeColor',
            // This if statement is to make sure that the color the user types in is infact a color, so that the file can be created properly
            validate: textColor => {
                if (isColor(textColor)) {
                    return true
                } else {
                    return 'invalid'
                }
            }
        }
    ])
        .then((data) => {
            //What to do with data
            console.log(data)
            // Here i am deconstructing the data, into 4 variables to be used to create the logo
            const {shape, shapeColor, text, textColor} = data;
            //  newLogo is a variable version of shapeChecker(shape, shapeColor, text, textColor).makeLogo(), to be used when writing the .svg file
            const newLogo = shapeChecker(shape, shapeColor, text, textColor).makeLogo()
            console.log(newLogo)
            // This function creates the "logo.svg" file with the specific requirements stated by the user
            fs.writeFile('logo.svg', newLogo, (e) => {
                e ? console.log(e) : console.log('Logo saved as "logo.svg"')
            });
        })
};

// This function filters through the possible shapes selected by the user, then uses the classes from ./lib/shapes.js to create their desired logo, using the rest of the data the user inputs
function shapeChecker (shape, shapeColor, text, textColor) {
        if (shape == 'Square') {
       return new Square(shapeColor, text, textColor)
    } else if (shape == 'Circle') {
       return new Circle(shapeColor, text, textColor)
    } else {
       return new Triangle(shapeColor, text, textColor)
    }
}

// This calles the init function, launching the prompts in the terminal
init()