var button = document.getElementsByClassName("button").item(0)

var pendejoSound = new Audio("pendejo.mp3")

var mouseOver = false

button.addEventListener(
    "mouseover",
    _ => {
        mouseOver = true
        pendejoSound.play()
    }
)

button.addEventListener(
    "mouseleave",
    _ => {
        mouseOver = false
    }
)

function increaseSizeByIfLessThen(element, amount, maximum) {
    var style = getComputedStyle(element)
    var floatWidthSize = parseFloat(style.width.slice(0, -2))
    var floatHeightSize = parseFloat(style.height.slice(0, -2))
    floatWidthSize += (floatWidthSize <= maximum) ? amount : 0
    floatHeightSize += (floatHeightSize <= maximum) ? amount : 0
    element.style.width = floatWidthSize.toString() + "px"
    element.style.height = floatHeightSize.toString() + "px"
}

function increaseFontByIfLessThen(element, amount, maximum){
    var style = getComputedStyle(element)
    var floatFontSize = parseFloat(style.fontSize.slice(0, -2))
    floatFontSize += (floatFontSize <= maximum) ? amount : 0
    element.style.fontSize = floatFontSize.toString() + "px"
}

function decreaseFontByIfAtLeast(element, amount, maximum){
    var style = getComputedStyle(element)
    var floatFontSize = parseFloat(style.fontSize.slice(0, -2))
    floatFontSize -= (floatFontSize >= maximum) ? amount : 0
    element.style.fontSize = floatFontSize.toString() + "px"
}

function descreaseSizeByIfAtLeast(element, amount, minimum) {
    var style = getComputedStyle(element)
    var floatWidthSize = parseFloat(style.width.slice(0, -2))
    var floatHeightSize = parseFloat(style.height.slice(0, -2))
    floatWidthSize -= (floatWidthSize >= minimum) ? amount : 0
    floatHeightSize -= (floatHeightSize >= minimum) ? amount : 0
    element.style.width = floatWidthSize.toString() + "px"
    element.style.height = floatHeightSize.toString() + "px"
}

async function main() {
    while (true){
        await new Promise(r => setTimeout(r, 1));
    
        if (mouseOver){
            increaseSizeByIfLessThen(button, 2, 300)
            increaseFontByIfLessThen(button, 0.4, 60)
        }

        else{
            descreaseSizeByIfAtLeast(button, 2, 100)
            decreaseFontByIfAtLeast(button, 0.4, 20)
        }
    }
}

main()
