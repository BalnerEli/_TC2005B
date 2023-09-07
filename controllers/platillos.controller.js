const Platillo = require('../models/platillo.model');
const Modelo = require('../models/platillo.model');

//------------------------------------- nosotros

exports.get_about = (request, response, next) => {
    response.render('platillos/about.ejs');
};

//necesario usar platillos/nosotros

exports.get_nosotros = (request, response, next) => {
    response.render('platillos/nosotros.ejs');
};

//--------------------------------------------------------------- Ordenar
//necesario usar platillos/ordenar
exports.get_ordenar = (request, response, next) => {
    response.render('platillos/ordenar.ejs');
};

exports.get_add = (request, response, next) => {
    response.render('platillos/add.ejs');
};

exports.post_add = (request, response, next) => {

    console.log(request.body);

    const platillo = new Platillo({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });
    platillo.save();

    response.redirect('/platillos');
}

exports.get_opinion = (request, response, next) => {
    response.render('platillos/opinion.ejs');
};

exports.post_opinion = (request, response, next) => {

    console.log(request.body);

    platillos.push({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });

    response.redirect('/platillos');
};

exports.get_list = (request, response, next) => {
    response.render('platillos/list.ejs', {
        platillos: Platillo.fetchAll(),
    });
}

