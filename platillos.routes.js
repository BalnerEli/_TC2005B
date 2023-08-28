
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

router.get('/nosotros', (request, response, next) => {

    const html=`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>La Comidita</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
    <article class="message is-warning">
    <div class="message-header">
        <p>La comidita</p>
        <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
        La comidita es un restaurante de alto nivel que se enfoca en crear las garnachitas más deliciosas de México.
    </div>
    </article>
        </main>
        </body>
        </html>
        `;
    
        response.send(html);
    });

//--------------------------------------------------------------- Ordenar
router.get('/ordenar', (request, response, next) => {

    const html=`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>La Comidita</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
    <aside class="menu">
    <p class="menu-label">
        Ordenar
    </p>
    <ul class="menu-list">
        <li><a>Tacos</a></li>
        <li><a>Enchiladas</a></li>
        <li><a>Chilaquiles</a></li>
        <li><a>Otro</a></li>
    </ul>
        </main>
        </body>
        </html>
        `;
    
        response.send(html);
    });

//--------------------------------------------------------------- OPINION

router.get('/opinion', (request, response, next) => {

    const html=`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>La Comidita</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Agregar Platillo</h1>
                    <form action="/opinion" method="POST">
                        <label for="nombre">Platillo</label>
                        <input id="nombre" name="nombre" class="input" type="text" placeholder="Chilaquiles">
                        <br><br>
                        <label for="descripcion">Opinión del platillo</label>
                        <textarea id="descripcion" name="descripcion" class="textarea" placeholder="Me encanta..."></textarea>
                        <br>
                        <input id="agregar" name="agregar" type="submit" value="Agregar" class="button is-info">
                    </form>
                </div>
            </section>
        </main>
        </body>
        </html>
        `;
    
        response.send(html);
    });
    
    app.post('/OPINION', (request, response, next) => {
    
        console.log(request.body);
    
        platillos.push({
            nombre: request.body.nombre,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
            descripcion: request.body.descripcion,
            opinion: request.body.opinion,
        });
    
        response.redirect('/');
    });

//-----------------------------------------------------NEW

app.get('/new', (request, response, next) => {

    const html=`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>La Comidita</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Agregar Platillo</h1>
                    <form action="/new" method="POST">
                        <label for="nombre">Platillo a agregar</label>
                        <input id="nombre" name="nombre" class="input" type="text" placeholder="Chilaquiles">
                        <br><br>
                        <label for="descripcion">Descripción del platillo</label>
                        <textarea id="descripcion" name="descripcion" class="textarea" placeholder="Delicioso platillo..."></textarea>
                        <br>
                        <input id="agregar" name="agregar" type="submit" value="Agregar" class="button is-info">
                    </form>
                </div>
            </section>
        </main>
        </body>
        </html>
        `;
    
        response.send(html);
    });

    app.post('/new', (request, response, next) => {
    
        console.log(request.body);
    
        platillos.push({
            nombre: request.body.nombre,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
            descripcion: request.body.descripcion,
            opinion : request.body.descripcion,
        });
    
        response.redirect('/');
    
    });

//------------------------------------------- INICIO
    router.get("/", (request, response, next) => {

        let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>La Comidita</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>

            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">La comidita</h1>
        
                        <div class="columns">`;
                        for(let platillo of platillos) {
                            html += 
                                `<div class="column">
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src="${platillo.imagen}" alt="${platillo.nombre}">
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="${platillo.imagen}" alt="${platillo.nombre}" - "${platillo.opinion}">
                                                </figure>
                                                </div>
                                                <div class="media-content">
                                                <p class="title is-4">${platillo.nombre}</p>
                                                </div>
                                                </div>
                                                <div class="media-content">
                                                <p class="title is-4">${platillo.opinion}</p>
                                                </div>
                                            </div>
                                        
                                            <div class="content">
                                                ${platillo.descripcion}
                                                <br>
                                                <button class="button is-danger is-rounded" onclick=ver("${platillo.nombre}")>Ver más</button>
                                            </div>
                                        
                                            
                                        </div>
                                    </div>
                                </div>`;

                

                        }
                        
        html += `       </div>
                    </div>
                </section>
            </main>
            <footer>
        
            </footer>
            </body>
            </html>
        `;

        response.write(html);
    })

    module.exports = router;