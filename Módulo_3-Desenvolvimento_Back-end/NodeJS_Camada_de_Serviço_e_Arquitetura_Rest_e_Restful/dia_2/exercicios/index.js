const express = require('express');
const { errorController } = require('./controllers/errorController');
const { pingPongController } = require('./controllers/ping-pongController');
const { cepRouter } = require('./routes/cepRouter');

const app = express();
const PORT = 3000;

app.get('/ping', pingPongController);
app.use('/cep', cepRouter);
app.use(errorController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));