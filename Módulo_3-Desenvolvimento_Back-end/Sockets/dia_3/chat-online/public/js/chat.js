const socket = window.io();

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', inputMessage.value);
  inputMessage.value = '';
  return false;
});

const createMessage = (result) => {
  console.log(result);
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = `"${result.id}" falou ${result.message}`;
  messagesUl.appendChild(li);
};

socket.on('serverMessage', (result) => createMessage(result));

window.onbeforeunload = function(event) {
  socket.disconnect();
};