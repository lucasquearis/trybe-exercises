const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');


const MoviesModel = require('../../models/movieModel');

const mongoConnection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  let connectionMock;
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async() => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('model_example').collection('movies').drop();
    MongoClient.connect.restore();
  });


  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
  it('deve existir um filme com o título cadastrado!', async () => {
    await MoviesModel.create(payloadMovie);
    const movieCreated = await connectionMock
      .db('model_example')
      .collection('movies')
      .findOne({ title: payloadMovie.title });
    expect(movieCreated).to.be.not.null;
  });
});