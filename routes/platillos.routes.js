const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canVerPlatillos = require('../util/can-ver-platillos');
const canAddPlatillos = require('../util/can-add-platillos');
const canOrdenarPlatillos = require('../util/can-ordenar-platillos');
const canOpinarPlatillos = require('../util/can-opinar-platillos');

//CONTROLLER 
const platillosController = require('../controllers/platillos.controller');

//--------
//about
router.get('/about', isAuth, platillosController.get_about);

//nosotros
router.get('/nosotros', isAuth, platillosController.get_nosotros);

//ordenar
router.get('/ordenar', isAuth, canOrdenarPlatillos, platillosController.get_ordenar);

//opinion
router.get('/opinion', isAuth, canOpinarPlatillos, platillosController.get_opinion);
router.post('/opinion', isAuth, canOpinarPlatillos, platillosController.post_opinion);

//add
router.get('/add', isAuth, canAddPlatillos, platillosController.get_add);
router.post('/add', isAuth, canAddPlatillos, platillosController.post_add);

//list
router.get('/list', isAuth, canVerPlatillos, platillosController.get_list);
router.get('/list/:id', isAuth, canVerPlatillos, platillosController.get_list);
router.get('/:id', isAuth, canVerPlatillos, platillosController.get_list);
router.get('/', isAuth, canVerPlatillos, platillosController.get_list);

module.exports = router;