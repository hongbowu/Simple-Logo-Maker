//function for text
class Text{ 

input(text,textColor) {
    return `<text x="125" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`
}
}
module.exports = Text;