const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  }
});

app.use(express.static(__dirname + '/public'))

http.listen(PORT, () => console.log(`Online na porta ${PORT}`))

require('./sockets/rooms')(io);
require('./sockets/chat')(io);