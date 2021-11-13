const express = require('express');
const { getAllBooks, getByAuthorId, isValid, insertNewBook } = require('./models/BooksMySql');
const AuthorsMySql = require('./models/AuthorMySql');
const { getAllMongo } = require('./models/AuthorsMongo');
const { getAllBooksMongo, getByAuthorIdMongo, findBookByIdMongo } = require('./models/BooksMongo');

const app = express();

app.use(express.json());

app.get('/authorsMongo', async (req, res) => {
  const authors = await getAllMongo();
  res.status(200).send(authors);
})

app.get('/booksMongo', async (req, res) => {
  const books = await getAllBooksMongo();
  res.status(200).send(books);
})

app.get('/bookByIdMongo/:id', async (req, res) => {
  const { id } = req.params;
  const books = await findBookByIdMongo(id);
  if(books.length === 0 || !books) return res.status(404).json({ message: 'Not Found!' });
  res.status(200).send(books);
})

app.get('/booksMongo/:id', async (req, res) => {
  const { id } = req.params;
  const books = await getByAuthorIdMongo(id);
  if(books.length === 0) return res.status(404).json({ message: 'Not Found!' });
  res.status(200).send(books);
})

app.get('/booksMySql', async (req, res) => {
  const books = await getAllBooks();
  res.status(200).send(books);
})

app.get('/booksMySql/:id', async (req, res) => {
  const { id } = req.params;
  const book = await getByAuthorId(id)
  if(book.length === 0) return res.status(404).json({ message: 'Not Found!'});
  res.status(200).send(book);
})

app.post('/booksMySql', async (req, res) => {
  const { title, author_id } = req.body;
  const book = await insertNewBook(title, author_id);
  if(!isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });
  res.status(200).send(`Livro adicionado com sucesso ao id:${book[0].insertId}`);
})

app.get('/authorsMySql', async (req, res) => {
  const authors = await AuthorsMySql();
  res.status(200).send(authors);
})

const PORT = 3001;

app.listen(PORT, () => console.log(`listening in port ${PORT}`));