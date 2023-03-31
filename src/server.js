const express = require('express');
const app = express();

const userRoutes = require('../routes/user');

// Definindo a rota para enviar um novo usuário para o banco de dados
app.use('/api/user', userRoutes.post);

// Definindo a rota para deletar um usuário
app.use('/api/user', userRoutes.delete);

app.listen(3334);

