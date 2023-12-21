const Shapes = require("../lib/shapes");
const Text = require("../lib/text")
// need shape shapeColor text textColor
const svgGenerator = (shape, text) =>{
let innerSvg =
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

${shape}

${text}

</svg>`
return innerSvg
}
const shapes = new Shapes()
const text = new Text()
const shape = shapes.circle(`"red"`)
const insert = text.input("wor",`"red"`)
console.log(svgGenerator(shape,insert))