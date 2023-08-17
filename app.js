console.log("hola desde node");

const filesystem = require('fs');
filesystem.writeFileSync("hola.txt","Hola desde node")

console.log("ya acabe de escribir");
