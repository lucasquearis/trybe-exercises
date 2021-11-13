const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const getAllBooksMongo = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
      .then((books) => books)
}

const getByAuthorIdMongo = async (id) => {
  return connection()
    .then((db) => db.collection('books').find( { author_id: parseInt(id) }).toArray())
      .then(authors => authors)
}

const findBookByIdMongo = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  if(!book) return null;
  return book;
}

module.exports = {
  getAllBooksMongo,
  getByAuthorIdMongo,
  findBookByIdMongo
};
