const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

//CONTROLLER 
const platillosController = require('../controllers/platillos.controller');

//--------
//about
router.get('/about', isAuth, platillosController.get_about);

//nosotros
router.get('/nosotros', isAuth, platillosController.get_nosotros);

//ordenar
router.get('/ordenar', isAuth, platillosController.get_ordenar);

//opinion
router.get('/opinion', isAuth, platillosController.get_opinion);
router.post('/opinion', isAuth, platillosController.post_opinion);

//add
router.get('/add', isAuth, platillosController.get_add);
router.post('/add', isAuth, platillosController.post_add);

//list
router.get('/list', isAuth, platillosController.get_list);
router.get('/list/:id', isAuth, platillosController.get_list);
router.get('/:id', isAuth, platillosController.get_list);
router.get('/', isAuth, platillosController.get_list);

module.exports = router;