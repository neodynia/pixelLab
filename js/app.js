
(document.getElementById('sizePicker')).addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
  (document.getElementById('button')).style.display = "inline-block";
});



function makeGrid() {
    let heightHTML = document.querySelector('#inputHeight');
    let widthHTML = document.querySelector('#inputWidth');
    for (let i = 0; i < heightHTML.value; i++) {
        (document.querySelector('#pixelCanvas')).appendChild(document.createElement('tr'));
        for (let j = 0; j < widthHTML.value; j++) {
        (document.querySelector('tr:last-child')).appendChild(document.createElement('td'));
    }
  }
}


(document.querySelector('table')).addEventListener("click", function(evt) {
  evt.target.style.backgroundColor = (document.querySelector('#colorPicker')).value;
});

(document.getElementById('button')).addEventListener("click", function() {
  document.location.reload();
})
