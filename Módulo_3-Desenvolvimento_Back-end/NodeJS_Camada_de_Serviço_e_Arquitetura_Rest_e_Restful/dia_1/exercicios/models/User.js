const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async (firstName, lastName, email, password) => {
  return connection()
    .then(db => db.collection('user').insertOne({
       firstName, lastName, email, password 
    }))
      .then((resp) => resp)
}

const getUser = async () => {
  return connection()
    .then(db => db.collection('user').find().toArray())
      .then(resp => resp)
}

const getUserById = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  const response = await connection()
    .then(db => db.collection('user').findOne(new ObjectId(id)));
  if(!response) return null;
  return response
}

const editUser = async (id, firstName, lastName, email, password) => {
  if(!ObjectId.isValid(id)) return null;
  const edit = connection()
    .then(db => db.collection('user').updateOne(
      {
        _id: new ObjectId(id)
      },
      {
        $set: {
          firstName,
          lastName,
          email,
          password,
        }
      }
    ))
  return edit;
}

module.exports = {
  create,
  getUser,
  getUserById,
  editUser
}