
class Profesional {
    constructor(nombre, profesion, img, contacto) {
        this.nombre = nombre;
        this.profesion = profesion;
        this.img = img;
        this.contacto = contacto;
    }
}

const profesionalUno = new Profesional("Jorge Almirón", "Brujo", "https://www.diarioelnorte.com.ar/wp-content/uploads/2023/11/jorge-almiron-derrota.jpg", "JorgeAlmironCAB7@gmail.com");
const profesionalDos = new Profesional("Marcelo Daniel Gallardo", "Ingeniero", "https://www.clarin.com/img/2024/07/31/UQVo2vePn_600x600__1.jpg", "MarceGallardo912@gmail.com");
const profesionalTres = new Profesional("Carlos Bilardo", "Médico", "https://media.tycsports.com/files/2020/04/24/96491/carlos-bilardo.jpg", "CarlosSalvadorBilardo1986@outlook.com");
const profesionalCuatro = new Profesional("Martín Demichelis", "Psicólogo", "https://media.elpatagonico.com/p/1a869b7e769226a5254f2bff6c47c053/adjuntos/193/imagenes/041/695/0041695797/770x0/smart/demichelisjpeg.jpeg", "MartínDemichelisVibes@gmail.com");
const profesionalCinco = new Profesional("Carlos Bianchi", "Abogado", "img/carleto.png", "Virrey3@hotmail.com");

const arrayDeProfesionales = [profesionalUno, profesionalDos, profesionalTres, profesionalCuatro, profesionalCinco];

function cardProfesionales(trabajador) {
    
    const contenedor = document.getElementById("contenedor")
    
    const card = document.createElement("div");
    card.className = "card";
    
    const nombre = document.createElement("h3");
    nombre.className = "card__nombre";
    nombre.innerText = trabajador.nombre;
    
    const profesion = document.createElement("p");
    profesion.className = "card__profesion";
    profesion.innerText = trabajador.profesion;
    
    const img = document.createElement("img");
    img.src = trabajador.img;
    img.className = "card__img";
    
    const contacto = document.createElement("p");
    contacto.innerText = trabajador.contacto;
    contacto.className = "card__contacto";
    
    const boton = document.createElement("button");
    boton.className = "card__boton";
    boton.innerText = "¡Contáctame!"
    boton.addEventListener("click", () => { alert("En breves nos comunicaremos con usted") })
    
    card.append(nombre);
    card.append(profesion);
    card.append(img);
    card.append(contacto);
    card.append(boton);
    
    contenedor.append(card)
}

let entrarAlSistema;
    
while(true) {

    entrarAlSistema = prompt("DESEA CONTRATAR ALGÚN SERVICIO?\n Si desea avanzar ingrese 'SI' \n En caso contrario, ingresar 'NO' ").toUpperCase();
    if (entrarAlSistema === "SI") {
        alert("Bienvenido, en esta web podrá contratar el servicio que requiera, atendido por los mejores profesionales del país");
        arrayDeProfesionales.forEach(el => cardProfesionales(el));
        break
    } else if(entrarAlSistema === "NO") {
        alert("Esperamos que vuelva pronto");
        break;

    } else {
        alert("No entendí tu respuesta");
    }

}
