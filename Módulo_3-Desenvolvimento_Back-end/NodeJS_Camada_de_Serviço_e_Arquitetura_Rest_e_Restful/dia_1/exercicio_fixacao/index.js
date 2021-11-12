const express = require('express');
const { getAllBooks, getByAuthorId, isValid, insertNewBook } = require('./models/Book');
const Author = require('./models/Author');

const app = express();

app.use(express.json());

app.get('/books', async (req, res) => {
  const books = await getAllBooks();
  res.status(200).send(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await getByAuthorId(id)
  if(book.length === 0) return res.status(404).json({ message: 'Not Found!'});
  res.status(200).send(book);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const book = await insertNewBook(title, author_id);
  if(!isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });
  res.status(200).send(`Livro adicionado com sucesso ao id:${book[0].insertId}`);
})

app.get('/authors', async (req, res) => {
  const authors = await Author();
  res.status(200).send(authors);
})

const PORT = 3001;

app.listen(PORT, () => console.log(`listening in port ${PORT}`));