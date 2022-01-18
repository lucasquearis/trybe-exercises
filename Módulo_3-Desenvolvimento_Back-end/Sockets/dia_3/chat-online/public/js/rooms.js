const socket = window.io();

// A `lib` expõe a constante `Qs`, que utilizaremos dessa forma no nosso exemplo
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

socket.emit('joinRoom', { username, room });

const createMessage = (message) => {
  console.log(message);
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}

socket.on('serverMessage', (message) => createMessage(message));