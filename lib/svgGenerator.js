const Shapes = require("../lib/shapes");
const Text = require("../lib/text")
// need shape shapeColor text textColor
const svgGenerator = (shape, text) =>{
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

${shape}

${text}

</svg>
}