//need shapes class to store the shapes
class Shapes {
  // need circle shape
  circle() {
    const shapesColor = `"blue"`;
    return `<circle cx="120" cy="100" r="80" fill=${shapesColor}></circle>`;
  }
  // need square shape
    square() {
    const shapesColor = `"blue"`;
    return `<rect x="50" y="30" width="150" height="150" fill=${shapesColor}/></rect>`;
  }
  //need rectangle shape
  rectangle() {
    const shapesColor = `"blue"`;
    return `<rect x="50" y="30" width="150" height="100" fill=${shapesColor}/></rect>`;
  }
}
const shapes = new Shapes();
console.log(shapes.square());
module.exports = Shapes;
