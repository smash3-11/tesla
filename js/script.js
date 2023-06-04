
let zps = document.querySelector('.zps');
let tem = document.querySelector('.tem');
let disk = document.querySelector('.disk');

const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

// Счетчик для скорости авто
let speedCounter = 60
let zpsCounter = 750
const speedElement = document.querySelector('#km');

plusButtons[0].onclick = () => {
  speedCounter++;
  zpsCounter--
  if( speedCounter <= 180){

      speedElement.innerHTML = `${speedCounter} км/ч`;
      zps.innerHTML = `${zpsCounter} км/ч`
  }
};

minusButtons[0].onclick = () => {
  speedCounter--;
  speedElement.innerHTML = `${speedCounter} км/ч`;
};

// Счетчик для температуры за окнами
let temperatureCounter = 20;
const temperatureElement = document.querySelector('#tem');

plusButtons[1].onclick = () => {
  temperatureCounter++
  zpsCounter--
  temperatureElement.innerHTML = `${temperatureCounter} °`;
  zps.innerHTML = `${zpsCounter} км/ч`
};

minusButtons[1].onclick = () => {
  temperatureCounter--;
  temperatureElement.innerHTML = `${temperatureCounter} °`;
};

// Счетчик для дисков
let diskCounter = 19;
const diskElement = document.querySelector('#disk');

// let pr = document.querySelector('pr')
plusButtons[2].onclick = () => {
  diskCounter++;
  if(diskCounter === 21) {

      diskElement.innerHTML = diskCounter
    //   pr.innerHTML = " $91.199"
      
  }
};

minusButtons[2].onclick = () => {
  diskCounter--;
  if(diskCounter === 19) {
      diskElement.innerHTML = diskCounter;
  }
};



