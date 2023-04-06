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

function init() {
    inquirer.prompt([
        {
            type: 'max-length',
            message: 'Type 3 characters to include in your logo',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'input',
            message: 'What font color would you like to use?',
            name: 'textColor',
            validate: textColor => {
                // isColor(textColor) ? console.log('Good choice!') : console.log('Good choice!')
                // return
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
            const newLogo = shapeChecker(data)
            fs.writeFile('logo.svg', newLogo, (e) => {
                e ? console.log(e) : console.log('Logo saved as "logo.svg"')
            });
        })
};
function shapeChecker ({shape, shapeColor, text, textColor}) {
        if (shape == 'Square') {
        const newLogo = new Square(shape, shapeColor, text, textColor)
        return newLogo
    } else if (shape == 'Circle') {
        const newLogo = new Circle(shape, shapeColor, text, textColor)
        return newLogo
    } else {
        const newLogo = new Triangle(shape, shapeColor, text, textColor)
        return newLogo
    }
}

init()