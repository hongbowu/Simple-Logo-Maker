//need shapes class to store the shapes
class Shapes {
  // need circle shape
  circle(shapesColor) {
    
    return `<circle cx="120" cy="100" r="80" fill=${shapesColor}></circle>`;
  }
  // need square shape
    square(shapesColor) {
    
    return `<rect x="50" y="30" width="150" height="150" fill=${shapesColor}/>`;
  }
  //need rectangle shape
  rectangle(shapesColor) {
    
    return `<rect x="50" y="50" width="150" height="100" fill=${shapesColor}/>`;
  }
}

module.exports = Shapes;
