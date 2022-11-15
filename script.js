const dfImage = document.getElementById('img');
const buttons = document.getElementById('bttns');
let intervalId = null;
let colorIdx = 0; 

const trafficLight = (event) => {
    intControl();
    activate[event.target.id]();
    
}

const nextIdx = () => {
    // the ++ MUST be in the right side of colorIdx to get the addition before the process start
    colorIdx = colorIdx  < 2 ? ++colorIdx : 0; 
}

const automatic = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIdx];
    activate[color]();
    nextIdx();
}

// this is necessary to control/limit the speed of the intervals each time that the user click the button
const intControl = () => clearInterval(intervalId);

const activate = {
    'red': () => dfImage.src = './imgs/red.png',
    'yellow': () => dfImage.src = './imgs/yellow.png',
    'green': () => dfImage.src = './imgs/green.png',
    'auto': () => intervalId = setInterval(automatic, 1000)
}



buttons.addEventListener('click', trafficLight);

