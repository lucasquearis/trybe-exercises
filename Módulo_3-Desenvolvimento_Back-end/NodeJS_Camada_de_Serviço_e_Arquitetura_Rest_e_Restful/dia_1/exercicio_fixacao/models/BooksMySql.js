const connection = require('./connectionMySql');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    `SELECT * FROM books;`
  )
  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT * FROM books WHERE author_id = ?`,
    [parseInt(id)]
  )
  return books;
}

const isValid = async (title, author_id) => {
  if(!title || title === '' || title.length < 3) return false;
  if(!author_id || author_id === '') return false;
  if(getByAuthorId(author_id).length === 0) return false;
  return true;
}

const insertNewBook = async (title, author_id) => {
  const book = await connection.execute(
    'INSERT INTO books (title, author_id) VALUES (?, ?)',
    [title, parseInt(author_id)],
  )
  return book;
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  insertNewBook,
  isValid,
};