// DOM Elements
const time = document.querySelector('.time'),
  week = document.querySelector('.week'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

const base = './assets/all/';
const images = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg', 'm6.jpg',
                  'd1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg', 'd5.jpg', 'd6.jpg',
                  'e1.jpg', 'e2.jpg', 'e3.jpg', 'e4.jpg', 'e5.jpg', 'e6.jpg',
                  'n1.jpg', 'n2.jpg', 'n3.jpg', 'n4.jpg', 'n5.jpg', 'n6.jpg'];
  let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
async function getQuote() {
  const url = `https://api.chucknorris.io/jokes/random`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.value;
  figcaption.textContent = 'Chuck Norris';
}
const buttn = document.querySelector('.btn2');
document.addEventListener('DOMContentLoaded', getQuote);
buttn.addEventListener('click', getQuote);


// Show Time
function showTime() {

  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  let weekly = new Date(),
    weekDay = today.getDay(),
    day = today.getDate(),
    month = today.getMonth();
  var options = { weekday: 'long', day: 'numeric', month: 'long' };
  const weekDayNew = new Intl.DateTimeFormat('en-US', options).format(weekly);

  // Output Time
  week.innerHTML = `${weekDayNew}`;
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}



// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if(hour === 6) {
    document.body.style.backgroundImage = "url('./assets/morning/m1.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#FFF5EE';
  } else if(hour === 7){
    document.body.style.backgroundImage = "url('./assets/morning/m2.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#FFEFD5';
  } else if(hour === 8){
    document.body.style.backgroundImage = "url('./assets/morning/m3.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#DB7093';
  } else if(hour === 9){
    document.body.style.backgroundImage = "url('./assets/morning/m4.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#CC5500';
  } else if(hour === 10){
    document.body.style.backgroundImage = "url('./assets/morning/m5.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'white';
  } else if(hour === 11){
    document.body.style.backgroundImage = "url('./assets/morning/m6.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = '#5F9EA0';
  } else if(hour === 12) {
    document.body.style.backgroundImage = "url('./assets/day/d1.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#CC5500';
  } else if(hour === 13) {
    document.body.style.backgroundImage = "url('./assets/day/d2.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#CC5500';
  } else if(hour === 14) {
    document.body.style.backgroundImage = "url('./assets/day/d3.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#CC5500';
  } else if(hour === 15) {
    document.body.style.backgroundImage = "url('./assets/day/d4.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';
  } else if(hour === 16) {
    document.body.style.backgroundImage = "url('./assets/day/d5.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#CC5500';
  } else if(hour === 17) {
    document.body.style.backgroundImage = "url('./assets/day/d6.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = '#CC5500';
  } else if(hour === 18) {
    document.body.style.backgroundImage = "url('./assets/evening/e1.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#B22222';
  } else if(hour === 19) {
    document.body.style.backgroundImage = "url('./assets/evening/e2.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'red';
  } else if(hour === 20) {
    document.body.style.backgroundImage = "url('./assets/evening/e3.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#B22222';
  } else if(hour === 21) {
    document.body.style.backgroundImage = "url('./assets/evening/e4.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#B22222';
  } else if(hour === 22) {
    document.body.style.backgroundImage = "url('./assets/evening/e5.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  } else if(hour === 23) {
    document.body.style.backgroundImage = "url('./assets/evening/e6.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  } else if(hour === 24) {
    document.body.style.backgroundImage = "url('./assets/night/n1.jpg')";
    greeting.textContent = 'Good Night';
    document.body.style.color = 'red';
  } else if(hour === 1) {
    document.body.style.backgroundImage = "url('./assets/night/n2.jpg')";
    greeting.textContent = 'Good Night';
    document.body.style.color = 'white';
  } else if(hour === 2) {
    document.body.style.backgroundImage = "url('./assets/night/n3.jpg')";
    greeting.textContent = 'Good Night';
    document.body.style.color = 'red';
  } else if(hour === 3) {
  document.body.style.backgroundImage = "url('./assets/night/n4.jpg')";
  greeting.textContent = 'Good Night';
  document.body.style.color = 'white';
  } else if(hour === 4) {
  document.body.style.backgroundImage = "url('./assets/night/n5.jpg')";
  greeting.textContent = 'Good Night';
  document.body.style.color = 'red';
  } else {
  document.body.style.backgroundImage = "url('./assets/night/n6.jpg')";
  greeting.textContent = 'Good Night';
  document.body.style.color = 'red';
}
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=1273f294d56ea3d19f3b2c64ed41b0f1&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${data.wind.speed}m/s`;
  humidity.textContent = `${data.main.humidity}%`;

}

// Get City
function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = '[Enter City]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
    }
  } else {
    localStorage.setItem('city', e.target.innerText);
    getWeather()
  }
}



document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
// Run
showTime();
setBgGreet();
getName();
getFocus();
getWeather();
getCity();