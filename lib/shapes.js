// Create shape classes to be used for the created SVG logos
// Shapes include Circle, Square and Triangle
// Create a parent shape class which contains all common proporties for each shape
// Then have individual child classes for each shape, with their own unique properties

class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

class Square extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo(shapeColor, text, textColor) {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100" stroke="black" fill=${shapeColor}/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
  }
};

class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo(shapeColor, text, textColor) {
    return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`
  }
};

class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  makeLogo(shapeColor, text, textColor) {
    return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`
  }
};


module.exports = {
  Circle, Triangle, Square
}