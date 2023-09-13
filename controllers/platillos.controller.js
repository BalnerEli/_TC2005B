const Platillo = require('../models/platillo.model');
//------------------------------------- nosotros

exports.get_about = (request, response, next) => {
    response.render('platillos/about.ejs',{
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

//necesario usar platillos/nosotros

exports.get_nosotros = (request, response, next) => {
    response.render('platillos/nosotros.ejs',{
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

//--------------------------------------------------------------- Ordenar
//necesario usar platillos/ordenar
exports.get_ordenar = (request, response, next) => {
    response.render('platillos/ordenar.ejs',{
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.get_add = (request, response, next) => {
    response.render('platillos/add.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_add = (request, response, next) => {

    console.log(request.body);

    const platillo = new Platillo({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });

    platillo.save()
        .then(() => {
            return response.redirect('/platillos');
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
}

exports.get_opinion = (request, response, next) => {
    response.render('platillos/opinion.ejs',{
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_opinion = (request, response, next) => {

    console.log(request.body);

    platillos.push({
        nombre: request.body.nombre,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
        descripcion: request.body.descripcion,
        opinion: request.body.opinion,
    });
    platillo.save()
        .then(() => {
            return response.redirect('/platillos');
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
}

exports.get_list = (request, response, next) => {
    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);

    Platillo.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);
            return response.render('platillos/list.ejs', {
                platillos: rows,
                tiempo_transcurrido: tiempo_transcurrido,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || false,
            });
            
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        }
    );
}

