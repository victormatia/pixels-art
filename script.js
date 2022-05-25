const wayToBoard = document.getElementById('pixel-board');

function createPixels(quantity) {
  for (let i = 0; i < quantity; i += 1) {
    const createDiv = document.createElement('div');
    wayToBoard.appendChild(createDiv);
    createDiv.setAttribute('id', i);
    createDiv.classList.add('pixel');
  }
}

createPixels(25);

//-----------------------------------------------------------------------------

function setBlackFirst() { // seta a cor black com a classe selected
  const wayToBlack = document.getElementById('black');
  wayToBlack.classList.add('selected');
}

setBlackFirst();

//-----------------------------------------------------------------------------

const wayToColor = document.querySelectorAll('.color');
const wayToBlack = document.getElementById('black');
const wayToRed = document.getElementById('red');
const wayToBlue = document.getElementById('blue');
const wayToGreen = document.getElementById('green');

for (let colors of wayToColor) {
  colors.addEventListener('click', function returnTarget(event) {
    console.log(event.target.innerText);
    if (event.target.innerText === 'red') {
      event.target.classList.add('selected');
      wayToBlack.classList.remove('selected');
      wayToBlue.classList.remove('selected');
      wayToGreen.classList.remove('selected');
    } else if (event.target.innerText === 'blue') {
      event.target.classList.add('selected');
      wayToBlack.classList.remove('selected');
      wayToRed.classList.remove('selected');
      wayToGreen.classList.remove('selected');
    } else if (event.target.innerText === 'green') {
      event.target.classList.add('selected');
      wayToBlack.classList.remove('selected');
      wayToRed.classList.remove('selected');
      wayToBlue.classList.remove('selected');
    } else {
      wayToBlack.classList.add('selected');
      wayToGreen.classList.remove('selected');
      wayToRed.classList.remove('selected');
      wayToBlue.classList.remove('selected');
    }
  })
}



