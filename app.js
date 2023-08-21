console.log("hola desde node");

const filesystem = require('fs');
filesystem.writeFileSync("hola.txt","Hola desde node")

console.log("ya acabe de escribir");

//funcion
setTimeout( () => { 
    console.log("Mensaje en tiempo dado"); 
}, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
setTimeout(() => {
    console.log(item);
}, item);
}

const http = require ("http");

const server = http.createServer ((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Introducción a las aplicaciones web, HTML5 y ciclo de vida de los sistemas de información</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <style>
            body {
                color: gray;
            }
        </style>
        <link rel="stylesheet" href="Lab2.css">
    
    </head>
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
    
        </header>
    <body>
    
        <article class="panel is-primary">
            <p class="panel-heading">
            Panel
            </p>
            <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            </p>
            <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-primary" type="text" placeholder="Search">
                <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>
            </div>
            <a class="panel-block is-active">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Sobre mi
            </a>
            <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Lab 1
            </a>
            <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Lab 2
            </a>
            <a class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Lab 3
            </a>
        </article>
    
        
        <h1 style="color:rgb(252, 192, 255)"> Eliuth Balderas Neri </h1> 
        <h2>A01703315</h2>
        <br>
        Contacto: <br>
        A01703315@tec.mx <br>
        </p> 
        <article class="message">
            <div class="message-header">
            <p>Aprendiendo a usar BULMA</p>
            <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
            Hola. esta es una prueba usando un mensaje en BUlMA. oy Eli. Me encanta la música (mi cantante favorito es <a target="_blank" href="https://www.youtube.com/watch?v=lyGRH8BlfZA">Justin Bieber</a>) y bailar aunque no necesariamente esto implique que sea buena en ello. 
            En cuanto al deporte me gusta mucho ir al gym puesto a que realmente es un momento para sacar todo el estrés.
            Amo participar en proyectos sociales que me permitan ayudar a comunidades marginadas. <br>
            
            </div>
        </article>
        <img src="me.jpeg" width="150"/>
        <hr>
        <h3 id="HTML">HTML</h3>
        <P> Hyper text markup Language, lenguaje estandar para crear páginas web. Consiste de etiquetas como parrafos, cabecera, cuerpo, etc </P>
        <hr>
        <h2>PREGUNTAS LAB 1</h2>
        <P>
            ¿Cuál es la diferencia entre Internet y la World Wide Web? <br>
            De acuerdo con la BBC, el "Internet es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí.
            En cambio, la web (la World Wide Web) es una enorme colección de páginas que se asienta sobreesa red de computadoras."<br>
            <br>
    
            -Internet es el medio <br>
            -WWW está EN el Internet <br>
            <br>
            ¿Cuáles son las partes de un URL?<br>
            <img src="URL.png" width="500"/> <br>
            <br>
            dominio es la dirección de la computadora a la que nos queremos comunicar <br>
            ruteo: <br>
            parámetro: el nombre del archivo<br>
            puede tener más variables <br>
            <br>
            ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?<br>
            GET: Solicita información del servidor. (esta petición solo tiene HEAD, no tiene BODY)<br>
            HEAD: Similar a GET pero solo solicita encabezados, no el cuerpo del recurso.<br>
            POST: Envía datos al servidor para ser procesados como formularios (este sí tiene BODY).<br>
            PUT: Actualiza un recurso en el servidor.<br>
            PATCH: Actualiza parcialmente un recurso en el servidor.<br>
            DELETE: Elimina un recurso en el servidor.<br>
            <br>
            ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?<br>
            POST ya que envía los datos al servidor para su procesamiento. (un get sería inseguro)<br>
            <br>
            ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?<br>
            GET <br>
            <br>
            Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?<br>
            Significa OK esto indica que la solicitud fue exitosa y el servidor pudo encontrar y devolver la página solicitada.<br>
            <br>
            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?<br>
            Error 404 (Not Found) <br>
            No, es responsavilidad del cliente <br>
            <br>
            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?<br>
            Error 500 (Internal Server Error)<br>
            Estos son cuestiones del sistema <br>
            Sí, también es responsabilidad del desarrollador corregir este tipo de error, ya que generalmente indica un problema en el servidor.<br>
            <br>
            ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? 
            Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.<br>
            Significa que cierto atributo ya no se recomienda su uso debido a que puede ser reemplazado 
            por estándares más nuevos o mejores prácticas. <br>
            <br>
            ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?<br>
            HTML es la versión más reciente de HTML <br>
            1.	Nuevas etiquetas semánticas: tales como header, footer, nav, article, section y aside facilitando la estructura y comprensión del código o contenido ya que describen la función y significado del contenido <br>
            2.	Soporte para contenido multimedia: HTML5 incluye elementos como video y audio que permiten incorporar contenido multimedia directamente en las páginas web sin la necesidad de utilizar complementos externos como Flash como en otras versiones . Esto facilita la reproducción de contenido multimedia en múltiples dispositivos sin problemas de compatibilidad.
            3.	Formularios más avanzados: nuevos tipos de entrada de formularios input type="date", input type="email", input type="url", input type="number", etc. Así como nuevos atributos para validar formularios, como required, pattern, min, y max. <br>
            4.	Canvas : canvas permite a los desarrolladores dibujar gráficos y animaciones mediante programación usando JavaScript <br>
            5.	Almacenamiento local: con localStorage y sessionStorage. Esto permite a las aplicaciones web guardar datos en el dispositivo del usuario y acceder a ellos sin necesidad de utilizar cookies. <br>
            6.	APIs y funcionalidades adicionales: HTML5 incluye una serie de nuevas APIs (Application Programming Interfaces) que permiten a los desarrolladores acceder a diversas funcionalidades del dispositivo y el navegador, como Geolocalización, WebSockets, Drag and Drop, Web Workers, entre otras. <br>
            7.	Compatibilidad con dispositivos móviles <br>
            <br>
            ¿Qué componentes de estructura y estilo tiene una tabla?<br>
            table: Elemento que contiene la tabla. <br>
            tr: Fila de la tabla.<br>
            td: Celda de datos.<br>
            th: Celda de encabezado.<br>
            <br>
            ¿Cuáles son los principales controles de una forma HTML5?<br>
            input: (text, password, checkbox, radio, etc.)<br>
            textarea: texto multilínea<br>
            select: Lista desplegable<br>
            button: Botón<br>
            <br>
            ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas) <br>
            476/555 puntos - Google Chrome <br>
            <br>
            Sobre el ciclo de vida y desarrollo de los sistemas de información:<br>
            ¿Cuál es el ciclo de vida de los sistemas de información?<br>
            Es desde que surge la idea, hasta que se entrega, o según otro autores, hasta que se le da el mantenimiento.Inclye también hasta cundo se retira el software.
            <br>
            <img src="ciclodevida.png" width="300"/> <br>
            <br>
            ¿Cuál es el ciclo de desarrollo de sistemas de información?<br>
            Análisis:Se establecen las bases del software, mediante la especificación de los requisitos <br>
            Diseño: Se crea un modelo abstracto del sistema mediante el diseño de la arquitectura y estructura de este. Descripción del Diseño de Software) <br>
            Desarrollo: Desarrollar y codificación del código fuente del sistema, se define la parametrización del sistema <br>
            Pruebas: Verificar y validar el sistema <br>
            Implantación: Instalación del software <br>
            Mantenimiento: Se asegura que el sistema funciona adecuadamente con el cliente, se realizan mejoras y actualizaciones al sistema para hacerlo más eficiente y se corrigen errores. <br>
        
            NOTA: ciclo de ingeniería.(Análisis- response al qué. Diseño-cómo se hará)
    
        </P>   
        
        <hr>
        <h2>PREGUNTAS LAB 2</h2>
        <ol class="Lab2_preguntas">
            <li>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de
            !important en un CSS?   Esta palabra clave se usa para dar mayor 
            prioridad a ciertas instrucciones para que instrucciones posteriores no
            puedan sobreescribirlas. Sin embargo, esto puede llevar a problemas de 
            mantenibilidad y dificultades para entender y/o modificar el código en 
            el futuro. Así pues, el uso de esta plabra clave se utilizaría para elementos
            que realmente se necesiten mantener en un cierto estilo.
            </li>
            <li>Si se pone una imagen de fondo en una página HTML, ¿por qué debe 
            escogerse con cuidado? Porque tiene un impacto en cuanto a la apariencia de la
            página, las imágenes también pueden afectar en cuanto a la legiibilidad de la página
            que a su vez, impacta en  la experiencia que tiene en los usuarios. Por otro lado,
            se debe de escoger cuidadosamente para manterner el formato de la página, y la visibilidad
            que tiene en distintos dispositivos. Finalmente, el peso de las imágenes permite tener mejor o peor velocidad
            en la carga
            </li>
            <li>Como ingeniero de software, ¿cuál es tu recomendación al elegir 
            las unidades de un propiedad de estilo entre %, px y pt?
            Se debe de tener en cuenta la naturaleza de la propiedad que se busca ajustar
            así como las necesidades de diseño específicas del sitio web o aplicación.
            Algunas de las recomendaciones son: si se buscan diseños flexibles y adaptables
            a distintos estilos de pantalla lo mejor es utilizar %. si el diseño no requiere 
            ser tan flexible y es fijo, lo mejor sería utilizar pixeles. Finalmente, no se recomienda usuar
            puntos en el diseño web, ya que estos son ideales para impresiones y su tamaño está vinculado a la resolución del dispositivo.
    
            </li>
            <li>¿Por qué el uso de una versión minimizada del CSS mejora el 
            rendimiento del sitio? Porque reduce la carga del archivo debido a la reducción del archivo, 
            adicionalamente,  hay un menor uso en el ancho de banda y permite que el caché sea 
            más efectivo.
            </li>
        </ol>
        <hr>
    
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">Lab 5</p>
                <p class="subtitle is-6">Describe Material design</p>
            </div>
            </div>
        
            <div class="content">
                Material Design es un sistema de diseño visual desarrollado por Google, 
                este se utiliza para crear interfaces de usuario, tienen que serÑ coherentes, atractivas y 
                funcionales en aplicaciones y sitios web. Se ha convertido en un estándar de diseño ampliamente 
                adoptado en la comunidad de diseño y desarrollo. Lo mejor de este sistema
                es que tiene un enfoque en la materialidad, usa sombras y movimiento para
                poder crear una experiencia más realista al usuario <a>@EliBalner</a>.
            <a href="#">#css</a> <a href="#">#MaterialDesign</a>
            <br>
            </div>
        </div>
        </div>
    
        <h5>Referencias:</h5>
        <p>
            Aviani, G. (2019) An introduction to http: Everything you need to know, 
            freeCodeCamp.org. Available at: https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/ (Accessed: 08 August 2023). 
            <br>
            BBC. (n.d.). ¿Cuál es la diferencia entre internet y la web? (Y por qué muchos Las confunden). 
            BBC News Mundo. https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,asienta%20sobreesa%20red%20de%20computadoras. 
            <br>
            Integra Sistemas. (Fecha de publicación). Uso de !important en CSS. [Entrada de blog]. Recuperado de https://www.integrasistemas.es/blog/general/uso-de-important-en-css/
            <br>
            KeepCoding. (s.f.). Ciclo de Vida del Desarrollo del Sistema. Recuperado
            de https://keepcoding.io/blog/ciclo-de-vida-del-desarrollo-del-sistema/
            <br>
            Solbyte. (2001). 5 etapas del proceso de desarrollo de software. Recuperado 
            de https://www.solbyte.com/blog/5-etapas-del-proceso-de-desarrollo-de-software/
            <br>
            Vera, M. (s.f.). Ingeniería de software.  Recuperado de
            http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro17/124_implantacin_de_sistemas.html#:~:text=Es%20la%20ultima%20fase%20del,a%20cabo%20un%20proceso%20automatizado. 
            <br>
    
        </p>
        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next</a>
            <ul class="pagination-list">
            <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" aria-label="Goto page 45">2</a></li>
            <li><a class="pagination-link is-current" aria-label="Page 2" aria-current="page">4</a></li>
            
        </ul>
        </nav>
    </body>
    </html>
    
        </p>
        <footer class="footer">
        <div class="content has-text-centered">
            <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Eliuth Balderas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">Tecnológico de Monterrey</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
        </div>
        </footer>
    
        <footer>Visual Studio Code https://code.visualstudio.com/</footer>
    </body>
    </html>
    
    `);
    response.end();
});

server.listen(3000);
