const express = require('express');

const Author = require('./controllers/Author');
const Books = require('./controllers/Books');
const middleError = require('./controllers/ErrorController');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);

app.get('/books', Books.getAll);

app.get('/authors/:id', Author.findById);

app.get('/books/:id', Books.findById);

app.post('/authors', Author.create);

app.post('/books', Books.create);

app.use(middleError)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
