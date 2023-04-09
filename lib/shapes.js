// Create shape classes to be used for the created SVG logos
// Shapes include Circle, Square and Triangle
// Create a parent shape class which contains all common proporties for each shape
// Then have individual child classes for each shape, with their own unique properties

//This is the parent class, holding all information nnneeded by its child classes Square, Triangle and Circle
class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

// The Square class uses the properties from its parent using the super() method, and using the constructor() method it uses the user data to create the logo inside the makeLogo() function
class Square extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="20" width="175" height="175"
    style="fill:${this.shapeColor};stroke:black;stroke-width:5" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
};

// The Triangle class uses the properties from its parent using the super() method, and using the constructor() method it uses the user data to create the logo inside the makeLogo() function
class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 5 260, 190 40, 190"
    style="fill:${this.shapeColor};stroke:black;stroke-width:5"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
};

// The Circle class uses the properties from its parent using the super() method, and using the constructor() method it uses the user data to create the logo inside the makeLogo() function
class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80"
    style="fill:${this.shapeColor};stroke:black;stroke-width:5"/>
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
};

// Here i am exporting all my classes from this file, to be used inside shapes.test.js and index.js
module.exports = {
  Circle, Triangle, Square
}
