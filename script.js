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
// function returnClickOnPalette() { // retorna qual cor foi clicada
//   const wayToColor = document.querySelectorAll('.color');

//   function returnTarget(eventClick) {
//     console.log(eventClick.target)
//   }

//   for (let elemets of wayToColor) {
//     elemets.addEventListener('click', returnTarget)
//   }

//   return returnTarget();
// }

// // returnClickOnPalette();

// function changeColor(color) {
//   color.classList.add('selected');
// }

// changeColor(returnClickOnPalette());
