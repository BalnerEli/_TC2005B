let platillos = [
    {
        nombre: "Tacos",
        imagen: "https://images.vexels.com/media/users/3/190244/isolated/preview/13ddec1378d0d66944bba45cf3a06053-taco-plano-kawaii.png",
        descripcion: "Deliciosos tacos de guisado"
    }, 
    {
        nombre: "Enchiladas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQYGWMuFWT1D0Ujjj28gx3RmYWn6nWeYPDw&usqp=CAU",
        descripcion: "Enchiladas rojas"
    }, 
    {
        nombre: "Chilaquiles",
        imagen: "https://us.123rf.com/450wm/kahovsky/kahovsky2006/kahovsky200600057/148766531-nachos-divertidos-felices-lindos-dise%C3%B1o-de-icono-de-ilustraci%C3%B3n-de-personaje-de-dibujos-animados-de.jpg",
        descripcion: "Chilaquiles verdes con pollo o huevo"
    }, 
];

const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        let html=`
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
                                                    <img src="${platillo.imagen}" alt="${platillo.nombre}">
                                                </figure>
                                                </div>
                                                <div class="media-content">
                                                <p class="title is-4">${platillo.nombre}</p>
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
        response.end();

    } else if(request.url == "/new" && request.method == "GET") {
        
        response.write(`
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
        `);
        response.end();

        //NEW POST
    } else if(request.url == "/new" && request.method == "POST") { 
        
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const primera_variable = datos_completos.split('&')[0];
            console.log(primera_variable);
            const primer_valor = primera_variable.split('=')[1];
            console.log(primer_valor);
            
            const descripcion = datos_completos.split('&')[1].split('=')[1];
            response.write(`Platillo agregado`);
            platillos.push({
                nombre: primer_valor,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DvQRndJwkYVEyZV5muqfh5RGWboDfsro7Q&usqp=CAU",
                descripcion: descripcion
            });
            return response.end();
        });

    
//3 ruta
    } else if(request.url == "/opinion" && request.method == "GET") {
        
        response.write(`
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
                        <h1 class="title">Opiniones</h1>
                        <form action="/opinion" method="POST">
                            <label for="nombre">Platillo</label>
                            <input id="nombre" name="nombre" class="input" type="text" placeholder="Chilaquiles">
                            <br><br>
                            <label for="opinion">Opninion del platillo</label>
                            <textarea id="opnion" name="descripcion" class="textarea" placeholder="El platillo me pareció..."></textarea>
                            <br>
                            <input id="agregar" name="agregar" type="submit" value="Agregar" class="button is-info">
                        </form>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);
        response.end();


    } else {
        response.statusCode = 404;
        response.write(`
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
                        <h1 class="title">Platillo no encontrado</h1>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);
        response.end();
    }
});

server.listen(3001);


