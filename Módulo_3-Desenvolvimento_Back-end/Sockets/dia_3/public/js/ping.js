const socket = window.io();

const button = document.querySelector('#pingButton');
button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

// cria uma `li` e coloca dentro da `ul` com `id` mensagens
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

// Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
const message = (mensagem) => createMessage(mensagem);
socket.on('ola', message);
socket.on('pong', message);