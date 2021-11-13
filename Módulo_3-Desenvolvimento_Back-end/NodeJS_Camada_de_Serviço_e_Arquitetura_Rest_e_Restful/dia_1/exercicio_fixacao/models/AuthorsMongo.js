const connection = require('./connectionMongo');

const getAllMongo = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) => authors);
};

module.exports = {
  getAllMongo
};
