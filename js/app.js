//Make a height x width grid of table cells from the user selected values for height and width
function makeGrid() {
    let heightHTML = document.querySelector('#inputHeight');
    let widthHTML = document.querySelector('#inputWidth');
    for (let i = 0; i < heightHTML.value; i++) {
        (document.querySelector('#pixelCanvas')).appendChild(document.createElement('tr'));
    }
    for (let j = 0; j < w; j++) {
        (document.querySelector('tr')).appendChild(document.createElement('td'));
    }
}