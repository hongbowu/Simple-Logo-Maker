//need shapes class to store the shapes
class Shapes {
  // need circle shape
  circle() {
    const shapesColor = `"blue"`;
    return `<circle cx="150" cy="100" r="80" fill=${shapesColor}></circle>`;
  }
  // need square shape
  //need rectangle shape
}
const shapes = new Shapes();
console.log(shapes.circle());
module.exports = Shapes;
