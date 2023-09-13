//USAR DB
const db = require('../util/database');

module.exports = class Platillo {
    constructor(nuevo_platillo) {
        this.nombre = nuevo_platillo.nombre || "_";
        this.imagen = nuevo_platillo.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSH6sP6JAp-y9GsXh3mtd2vw2D3sg4QfmbA&usqp=CAU";
        this.descripcion = nuevo_platillo.descripcion || "Delicioso platillo...";
        this.opinion = nuevo_platillo.opinion || "Me encanta";
    }

    save() {
        return db.execute(
            'INSERT INTO platillos(nombre, imagen, descripcion, opinion) VALUES (?, ?, ?)', 
            [this.nombre, this.imagen, this.descripcion, this.opinion]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM platillos')
    }

    static fetch(id) {
        if (id) {
            return db.execute('SELECT * FROM platillos WHERE id = ?', 
            [id]);
        } else {
            return this.fetchAll();
        }
    }
}