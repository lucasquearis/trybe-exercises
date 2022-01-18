module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', { message: 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.', id: 'Sistema'});
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', { message, id: socket.id });
  });
  socket.broadcast.emit('serverMessage', { message: `Iiiiraa,  ${socket.id} acabou de se conectar!! =D`, id: socket.id });
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', {
      message: `Xiii! ${socket.id} acabou de se desconectar! :(`,
      id: "Sistema" 
    });
  });
});