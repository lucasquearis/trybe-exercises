const express = require('express');
const { create, getUser, getUserById, editUser } = require('./models/User');
const PORT = 3001;

const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const sucessful = await create(firstName, lastName, email, password);
  if(!firstName || !lastName || !email || !password) return res.status(400).json({ error: true, message: 'Inclua todos os campos' })
  if(password.length < 6 || typeof password !== 'string') return res.status(400).json(
    {
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres no formato string"
    }
  )
  res.status(201).json({
      id: sucessful.insertedId,
      firstName,
      lastName,
      email,
  });
})

app.get('/user', async (req, res) => {
  const sucessful = await getUser();
  if(!sucessful || sucessful === []) return res.status(200).json([])
  res.status(200).json(sucessful);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  if(!id) return res.status(404).json({ message: 'Por favor, insira um id válido!' });
  const sucessful = await getUserById(id);
  if(!sucessful) return res.status(404).json(
    {
      error: true,
      message: "Usuário não encontrado"
    }
  )
  res.status(200).json(sucessful)
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  if(!id) return res.status(404).json({ message: 'Por favor, insira um id válido!' });
  const sucessful = await editUser(id, firstName, lastName, email, password);
  if(!firstName, !lastName, !email, !password) return res
    .status(404).json(
      {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
      }
    )
  if(!sucessful) return res.status(404).json({ message: 'id não encontrado' })
  res.status(200).json(sucessful);
})

app.listen(PORT, () => console.log('online'));