const express = require('express');
const router = express.Router();

//CONTROLLER 
const platillosController = require('../controllers/platillos.controller');

//--------
//about
router.get('/about', platillosController.get_about);

//nosotros
router.get('/nosotros', platillosController.get_nosotros);

//ordenar
router.get('/ordenar', platillosController.get_ordenar);

//opinion
router.get('/opinion', platillosController.get_opinion);
router.post('/opinion', platillosController.post_opinion);

//add
router.get('/add', platillosController.get_add);
router.post('/add', platillosController.post_add);

//list
router.get('/list', platillosController.get_list);
router.get('/list/:id', platillosController.get_list);
router.get('/:id', platillosController.get_list);
router.get('/', platillosController.get_list);

module.exports = router;