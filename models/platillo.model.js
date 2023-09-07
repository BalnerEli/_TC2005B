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

module.exports = class Platillo {
    constructor(nuevo_platillo) {
        this.nombre = nuevo_platillo.nombre || "_";
        this.imagen = nuevo_platillo.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSH6sP6JAp-y9GsXh3mtd2vw2D3sg4QfmbA&usqp=CAU";
        this.descripcion = nuevo_platillo.descripcion || "Delicioso platillo...";
        this.opinion = nuevo_platillo.opinion || "Me encanta";
    }
    save() {
        platillos.push(this);
    }
    static fetchAll() {
        return platillos;
    }
}