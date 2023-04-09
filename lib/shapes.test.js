// Here i am to write tests for the shapes.js file using jest
const { Circle, Square, Triangle } = require('./shapes');

// A testing suite for Color
describe('Logo makers', () => {
    describe('Square logo maker', () => {
        it('With the provided input, this should create a red square, with MGI in white font', () => {
            const shape = new Square("red", "MGI", "white").makeLogo();
            expect(shape).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="20" width="175" height="175"
            style="fill:"red";stroke:black;stroke-width:5" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">MGI</text>
            </svg>`);
        });
    });
    describe('Circle logo maker', () => {
        it('With the provied input, this should create a blue circle, with RLF in yellow font', () => {
            const shape = new Circle("blue", "RLF", "yellow").makeLogo();
            expect(shape).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80"
            style="fill:"blue";stroke:black;stroke-width:5"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">RLF</text>
            </svg>`)
        });
    });
    describe('Triangle logo maker', () => {
        it('With the provided input, this would create a white triangle, with PGH in green font', () => {
            const shape = new Triangle("white", "PGH", "green").makeLogo();
            expect(shape).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 5 260, 190 40, 190"
            style="fill:"white";stroke:black;stroke-width:5"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="green">PGH</text>
            </svg>`)
        });
    });
});

describe('Test Tester', () => {
    it('blablabla', () => {
        const a = new Triangle("pink", "ROL", "blue");
        expect(a).toEqual({"shapeColor": "pink", "text": "ROL", "textColor": "blue"});
    })
})
