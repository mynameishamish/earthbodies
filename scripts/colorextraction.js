const colorThief = new ColorThief();
const swatches = document.querySelectorAll('div.colour-swatch');
const gradient = document.querySelector('div.colour-gradient')
const swatchLabels = document.querySelectorAll('div.swatch-label')

let colourPalette = [];
let colourDominant = [];
let colourArray = [];

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

const convertColourPallette = () => {
    let colour1 = rgbToHex(colourPalette[0][0], colourPalette[0][1], colourPalette[0][2])
    let colour2 = rgbToHex(colourPalette[1][0], colourPalette[1][1], colourPalette[1][2])
    let colour3 = rgbToHex(colourPalette[2][0], colourPalette[2][1], colourPalette[2][2])
    let colour4 = rgbToHex(colourPalette[3][0], colourPalette[3][1], colourPalette[3][2])
    colourArray = [colour1, colour2, colour3, colour4]
    return colourArray  
}

const changeSwatches = (array) => {
    swatches.forEach((swatch, index) => {
        swatch.style.backgroundColor = array[index]
        swatchLabels[index].innerHTML = array[index]
    });
    // console.log(array[0])
    // gradient.style.background = `conic-gradient(at 75% 20%, ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]})`
    let backgroundColour = `radial-gradient(ellipse at top left, ${array[0]} 30%, transparent 90%), radial-gradient(ellipse at bottom left, ${array[1]}  50% , transparent 90%), radial-gradient(ellipse at top right, ${array[2]} 15%, transparent 40%), radial-gradient(ellipse at bottom right, ${array[3]} 5%, transparent 90%)`
    gradient.style.background = backgroundColour
    // console.log(backgroundColour)
}

// // // Make sure image is finished loading

// console.log(colours[0].image2)
// console.log(img[0])

// imageToScan = img[0].querySelector('img')
// console.log(imageToScan)

const updateColourSwatches = () => {

  const img = document.querySelectorAll('li.slide');
  imageToScan = img[0].querySelector('img')

  // const imgThumb = document.getElementById('modal-thumb')
  // imageToScan = imgThumb
  // console.log(imageToScan)

  // imageToScan = img;
  // console.log(imageToScan)
  
  if (imageToScan.complete) {
    colourDominant = colorThief.getColor(imageToScan)
    colourDominant = rgbToHex(colourDominant[0], colourDominant[1], colourDominant[2])
    colourPalette = colorThief.getPalette(imageToScan)
    colourArray = convertColourPallette()
    changeSwatches(colourArray)
  } else {
    imageToScan.addEventListener('load', function() {
      colourDominant = colorThief.getColor(imageToScan)
      colourDominant = rgbToHex(colourDominant[0], colourDominant[1], colourDominant[2])
      colourPalette = colorThief.getPalette(imageToScan)
      colourArray = convertColourPallette()
      changeSwatches(colourArray)
    });
  }
}

// updateColourSwatches()








