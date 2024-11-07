const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const usersMiddlewares = require('../middlewares/usersMiddlewares');

// CRIANDO ROTAS DE USUÁRIOS
router.get('/listar-usuarios', usersController.getAllUsers);
router.post('/criar-usuario', usersMiddlewares.middlewareCreateNewUser, usersController.createNewUser);
router.put('/atualizar-usuario/:id', usersController.updateUserById);


module.exports = router;