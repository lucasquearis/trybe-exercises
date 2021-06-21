// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const pegarH2 = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => pegarH2.innerHTML = data.joke);
    // .then(data => console.log(data.joke))
};

window.onload = () => fetchJoke();