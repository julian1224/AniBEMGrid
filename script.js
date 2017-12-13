const fuckoff = document.getElementById('butt');
let squaRed = document.querySelector('.square__red');
let squareMagenta = document.querySelector('.square__magenta');
let squareBlue = document.querySelector('.square__blue');

const extend = () => {
  squaRed.classList.toggle('square__extend');
  squareBlue.classList.toggle('square__extend');
  squareMagenta.classList.toggle('square__extend');
}

fuckoff.addEventListener('click', extend);
