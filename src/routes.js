const express = require('express');
const router = express.Router();

const CarControllers = require('./controllers/CarControllers');
const { default_type } = require('mime');

router.get('/carros', CarControllers.buscarTodos);
router.get('/carro/:codigo', CarControllers.buscarUm);
router.post('/carro', CarControllers.inserir);
router.put('/carro/:codigo', CarControllers.alterar);
router.delete('/carro/:codigo', CarControllers.excluir);

module.exports = router;
