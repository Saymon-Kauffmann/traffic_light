const dfImage = document.getElementById('img');
const buttons = document.getElementById('bttns');

const trafficLight = (event) => {
    activate[event.target.id]();
}

const activate = {
    'red': () => dfImage.src = './imgs/red.png',
    'yellow': () => dfImage.src = './imgs/yellow.png',
    'green': () => dfImage.src = './imgs/green.png'
}

buttons.addEventListener('click', trafficLight);

