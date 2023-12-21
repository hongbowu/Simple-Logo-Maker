const Shapes = require("../lib/shapes");

//test shapes
describe("shapes", () => {
  describe("circle", () => {
    it('should return `<circle cx="150" cy="100" r="80" fill=${shapesColor}></circle>`', () => {
      const shapes = new Shapes();
      const circle = shapes.circle();
      expect(circle).toBe(
        `<circle cx="150" cy="100" r="80" fill="blue"></circle>`
      );
    });
  });
});
