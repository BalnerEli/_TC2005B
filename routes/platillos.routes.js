const express = require('express');

const router = express.Router();

const path = require('path');

let platillos = [
    {
        nombre: "Tacos",
        imagen: "https://images.vexels.com/media/users/3/190244/isolated/preview/13ddec1378d0d66944bba45cf3a06053-taco-plano-kawaii.png",
        descripcion: "Deliciosos tacos de guisado",
        opinion: "Me encanta"
    }, 
    {
        nombre: "Enchiladas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQYGWMuFWT1D0Ujjj28gx3RmYWn6nWeYPDw&usqp=CAU",
        descripcion: "Enchiladas rojas",
        opinion: "Me encanta"
    }, 
    {
        nombre: "Chilaquiles",
        imagen: "https://us.123rf.com/450wm/kahovsky/kahovsky2006/kahovsky200600057/148766531-nachos-divertidos-felices-lindos-dise%C3%B1o-de-icono-de-ilustraci%C3%B3n-de-personaje-de-dibujos-animados-de.jpg",
        descripcion: "Chilaquiles verdes con pollo o huevo",
        opinion: "Me encanta"
    }, 
];

//------------------------------------- nosotros
//necesario usar platillos/nosotros

router.get('/nosotros', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'nosotros.html'));
});

//--------------------------------------------------------------- Ordenar
//necesario usar platillos/ordenar
router.get('/ordenar', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'ordenar.html'));
});

//--------------------------------------------------------------- OPINION
//necesario usar platillos/opinion
router.get('/opinion', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'opinion.html'));
});

router.post('/opinion', (request, response, next) => {

    console.log(request.body);

    platillos.push({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });

    response.redirect('/platillos');
});


//-----------------------------------------------------NEW

router.get('/new', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
});

router.post('/new', (request, response, next) => {

    console.log(request.body);

    platillos.push({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });

    response.redirect('/platillos');
});

//------------------------------------------- INICIO
router.get("/", (request, response, next) => {
    
    response.render('platillos/list.ejs', {
        platillos: platillos
    });
});

module.exports = router;