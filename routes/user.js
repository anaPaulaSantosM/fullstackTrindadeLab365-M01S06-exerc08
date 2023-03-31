const express = require('express');
const router = express.Router();
userController = require('../controllers/manipulaUsers');

// Rota para enviar um novo usuário para o banco de dados
router.post('/createUser', userController.userById);

// Rota para deletar um usuário do banco de dados
router.delete('/deletedUser/:id', userController.userById);

module.exports = router;
