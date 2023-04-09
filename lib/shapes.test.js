// Here i am to write tests for the shapes.js file using jest
const { Circle, Square, Triangle } = require('./shapes');

// A testing suite for Color
describe('Color', () => {
    it('Should take the color provided by the user input, and input that color into the created shape', () => {
        const shape = new Square();
        shape.setColor("blue")
        expect(shape.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="20" width="175" height="175"
        style="fill:"blue";stroke:black;stroke-width:5" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`);
    })
})
// <rect x="60" y="20" width="175" height="175"
// style="fill:'blue';stroke:black;stroke-width:5" />