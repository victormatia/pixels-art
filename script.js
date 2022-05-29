function createPixels(quantity) { // cria o quadro de pixels
  //const wayToBoard = document.getElementById('pixel-board');
  const wayToBoard = document.getElementsByTagName('section')[2];
  const sum = quantity * quantity

  for (let i = 0; i < sum; i += 1) {
    const createDiv = document.createElement('div');
    wayToBoard.appendChild(createDiv);
    createDiv.setAttribute('id', i);
    createDiv.classList.add('pixel');
  }
}

createPixels(5);

//-----------------------------------------------------------------------------

function setBlackFirst() { // seta a cor black com a classe selected
  const wayToC1 = document.getElementById('cor 1');
  wayToC1.classList.add('selected');
  wayToC1.style.backgroundColor = 'rgb(0, 0, 0)'
}

setBlackFirst();

//-----------------------------------------------------------------------------

function colorSelected() { // seleciona uma cor de cada vez
  const wayToColor = document.querySelectorAll('.color');

  for (let colors of wayToColor) {
    colors.addEventListener('click', function returnTarget(event) {
      const wayToC1 = document.getElementById('cor 1');
      const wayToC2 = document.getElementById('cor 2');
      const wayToC3 = document.getElementById('cor 3');
      const wayToC4 = document.getElementById('cor 4');

      if (event.target.innerText === 'cor 2') {
        event.target.classList.add('selected');
        wayToC1.classList.remove('selected');
        wayToC3.classList.remove('selected');
        wayToC4.classList.remove('selected');
      } else if (event.target.innerText === 'cor 3') {
        event.target.classList.add('selected');
        wayToC1.classList.remove('selected');
        wayToC2.classList.remove('selected');
        wayToC4.classList.remove('selected');
      } else if (event.target.innerText === 'cor 4') {
        event.target.classList.add('selected');
        wayToC1.classList.remove('selected');
        wayToC2.classList.remove('selected');
        wayToC3.classList.remove('selected');
      } else {
        wayToC1.classList.add('selected');
        wayToC4.classList.remove('selected');
        wayToC2.classList.remove('selected');
        wayToC3.classList.remove('selected');
      }
    })
  }
}

colorSelected();

//-----------------------------------------------------------------------------

function fillPixel() { // preenche os pixels com a cor selecionada
  const wayToDivs = document.querySelectorAll('div');

  function color(event) {
    event.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  }

  for (let div of wayToDivs) {
    div.addEventListener('click', color)
  }
}
fillPixel();

//-----------------------------------------------------------------------------

function clearBoard() {
  const wayToButton = document.querySelector('#clear-board');
  const wayToDivs = document.querySelectorAll('div');

  wayToButton.addEventListener('click', function test() {
    for (let div of wayToDivs) {
      div.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}

clearBoard();

//-----------------------------------------------------------------------------

function deletePixels() { // deleta o quadro de pixels inicial
  const wayToDivs = document.querySelectorAll('.pixel');
  for (let i = 0; i < wayToDivs.length; i += 1) {
    wayToDivs[i].remove();
  }
}

function whidthBoard() { // define um tamanho para o board
  const wayToBoard = document.getElementsByTagName('section')[2];
  let wayToInput = document.querySelector('#board-size');
  let value = wayToInput.value;

  if (value <= 5) {
    wayToBoard.setAttribute('id', 'pixel-board');
  } else if (value > 5 && value <= 8) {
    wayToBoard.setAttribute('id', 'pixel-board-medium');
  } else if (value > 8 && value <= 11) {
    wayToBoard.setAttribute('id', 'pixel-board-large');
  } else if (value >= 50) {
    wayToBoard.setAttribute('id', 'pixel-board-xlarge');
  }
}

// function reducePixelSize() {
//   const wayToDivs = document.querySelectorAll('div');

//   for (let div of wayToDivs) {
//     div.classList.remove('pixel');
//     div.classList.add('pixelFor50');
//   }
// }

// function increasePixelSize() {
//   const wayToDivs = document.querySelectorAll('div');

//   for (let div of wayToDivs) {
//     div.classList.remove('pixelFor50');
//     div.classList.add('pixel');
//   }
// }

function valueInput() { // recebe o valor do input e executa as funções necessárias.
  let wayToInput = document.querySelector('#board-size');
  let wayToBtn = document.querySelector('#generate-board');

  function createAlert() {
    let wayToInput = document.querySelector('#board-size');
    let value = wayToInput.value;

    if (value == 0 || value > 50) {
      alert('Board inválido!');
    }
  }

  function eventBtn(event) { // reage ao click do btn vqv
    let value = wayToInput.value;

    if (value < 5) {
      createAlert();
      deletePixels();
      createPixels(5);
    } else if (value >= 50) {
      createAlert();
      deletePixels();
      createPixels(50);
      // reducePixelSize();
      // fillPixel();
      // clearBoard();
      // whidthBoard()
    } else {
      deletePixels();
      createPixels(value);
      // increasePixelSize()
      fillPixel();
      clearBoard();
      whidthBoard()

    }

  }

  wayToBtn.addEventListener('click', eventBtn);
}

valueInput();

//-----------------------------------------------------------------------------

function generateRadomColors() {
  const n1 = Math.floor(Math.random() * 255);
  const n2 = Math.floor(Math.random() * 255);
  const n3 = Math.floor(Math.random() * 255);

  return `rgb(${n1}, ${n2}, ${n3})`;
}

window.onload = function randomColors(){ // após
  const wayToColors = document.querySelectorAll('.color');

  for (let i = 1; i < wayToColors.length; i += 1) {
    wayToColors[i].style.backgroundColor = generateRadomColors();
  } 
}
