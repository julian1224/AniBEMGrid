const fuckoff = document.getElementById('butt');
let square = document.querySelector('.square')


const extend = () => {
  square.classList.toggle('square__extend');
}

fuckoff.addEventListener('click', extend);
