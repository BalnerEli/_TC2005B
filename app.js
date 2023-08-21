console.log("hola desde node");

const filesystem = require('fs');
filesystem.writeFileSync("hola.txt","Hola desde node")

console.log("ya acabe de escribir");

const http = required ("http");

const server = http.createServer ((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write("Hoooola");
    response,end();
});

server.listen(3000);
