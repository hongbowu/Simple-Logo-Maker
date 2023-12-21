const Shapes = require("./lib/shapes");
const Text = require("./lib/text");
const svgGenerator = require("./lib/svgGenerator")

const inquirer = require("inquirer")
const fs = require("fs")

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf-8",(error)=> error ? console.error(error): console.log("success!"))
}

function init() {
    inquirer
    .prompt([
        {
            type:"input",
            message:"You can enter up to 3 characters",
            name:"textInput"
          
        },
        {
            type:"input",
            message:"You can enter a color keyword or a hexadecimal number for the text color",
            name:"textColor"
        },
        {
            type:"list",
            message:"You can chose a shape",
            name:"shapesChoice",
            choices:["circle", "square", "rectangle"]
        },
        {
            type:"input",
            message:"You can enter a color keyword or a hexadecimal number for the shape's color",
            name:"shapeColor"
        }
    ])
    .then((response)=>{
        const {textInput, textColor, shapesChoice, shapeColor} = response
        if (textInput.length > 3) {
            console.log("Text content must be less or equal to 3 characters");
            init(); 
        } else {
        const shapes = new Shapes()
        const text = new Text()
        const shape = shapes[shapesChoice](`"${shapeColor}"`)
        const insert = text.input(`${textInput}`,`"${textColor}"`)
        writeToFile("./examples/logo.svg", svgGenerator(shape,insert))
        }
    })
}
init()