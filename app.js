const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware1');
    next(); 
});

const rutasPlatillos = require('./routes/platillos.routes');

app.use('/platillos', rutasPlatillos);

app.use((request, response, next) => {
    console.log('Middleware!');

    response.statusCode = 404;

    response.send('Not found'); 
});

app.listen(3001);   
