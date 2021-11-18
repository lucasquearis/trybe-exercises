const connection = require('./connection')
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books)
}

const findById = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  const book = await connection()
    .then(db => db.collection('books').findOne(new ObjectId(id)))
  if(!book) return null;
  return book;
}

const create = async (title, author_id) => {
  return connection()
    .then(db => db.collection('books').insertOne({ title, author_id }))
    .then(result => result);
}

const findByName = async (name) => {
  return connection()
    .then(db => db.collection('books').findOne({ title: name }))
    .then(result => result);
}

module.exports = {
  getAll,
  findById,
  create,
  findByName,
}