const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//cookie
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

//Middleware
//Cookies
app.use((request, response, next) => {
    console.log('Middleware1');
    /*
    exports.accion = (request, response, next) => {
        response.setHeader('Set-Cookie', 'nombre_cookie', 'valor_cookie');
    }
    */
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');
    next(); 
});

const rutasPlatillos = require('./routes/platillos.routes');

app.use('/platillos', rutasPlatillos);
const rutasUsers = require('./routes/users.routes');
app.use('/users', rutasUsers);

app.use((request, response, next) => {
    console.log('Middleware!');

    response.statusCode = 404;

    response.send('Not found'); 
});

app.listen(3001);   
