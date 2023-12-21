const Shapes = require("../lib/shapes");
const Text = require("../lib/text")

//test shapes
describe("shapes", () => {
  describe("circle", () => {
    it('should return `<circle cx="120" cy="100" r="80" fill=${shapesColor}></circle>`', () => {
      const shapes = new Shapes();
      const circle = shapes.circle();
      expect(circle).toBe(
        `<circle cx="120" cy="100" r="80" fill="blue"></circle>`
      );
    });
  });
  describe("square", () => {
    it('should return `<rect x="50" y="30" width="150" height="150" fill=${shapesColor}/></rect>`', () => {
      const shapes = new Shapes();
      const square = shapes.square();
      expect(square).toBe(
        `<rect x="50" y="30" width="150" height="150" fill="blue"/></rect>`
      );
    });
  });
  describe("rectangle", () => {
    it('should return `<rect x="50" y="50" width="150" height="100" fill=${shapesColor}/></rect>`', () => {
      const shapes = new Shapes();
      const rectangle = shapes.rectangle();
      expect(rectangle).toBe(
        `<rect x="50" y="50" width="150" height="100" fill="blue"/></rect>`
      );
    });
  });
});
describe("text",()=>{
    describe("textInput", () => {
        it('should return `<text x="125" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`', () => {
          const text = new Text();
          const input = text.input("svg",`"white"`);
          expect(input).toBe(
            `<text x="125" y="125" font-size="60" text-anchor="middle" fill="white">svg</text>`
          );
        });
      });
})