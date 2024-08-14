
class Profesional {
    constructor(nombre, profesion, img, precio, contacto) {
        this.nombre = nombre;
        this.profesion = profesion;
        this.img = img;
        this.precio = precio;
        this.contacto = contacto;
    }
}

const profesionalUno = new Profesional("Jorge Almirón",
    "Brujo",
    "img/almiron.png",
    5000,
    "JorgeAlmironCAB7@gmail.com");
const profesionalDos = new Profesional("Marcelo Daniel Gallardo",
    "Ingeniero Civil",
    "img/muñeco.png",
    10000,
    "MarceGallardo912@gmail.com");
const profesionalTres = new Profesional("Carlos Bilardo",
    "Médico", 
    "img/carlos-bilardo.jpg",
    14000,
    "SalvadorBilardo@outlook.com");
const profesionalCuatro = new Profesional("Martín Demichelis",
    "Psicólogo",
    "img/demichelis.jpg",
    8000,
    "DemichelisVibes@gmail.com");
const profesionalCinco = new Profesional("Carlos Bianchi",
    "Abogado", 
    "img/carleto.png",
    20000,
    "CarlosVirrey3@hotmail.com");
const profesionalSeis = new Profesional("Caruso Lombardi",
    "Payaso",
    "img/lombardi.png",
    9000,
    "CarusoLombardi@gmail.com")

const profesionalSiete = new Profesional("Lionel Scaloni",
    "Ingeniero Industrial",
    "img/scaloni.png",
    30000,
    "LionelScaloneta@gmail.com"
)

const profesionalOcho = new Profesional("Marcelo Bielsa",
    "Psiquiatra",
    "img/bielsa.png",
    5000,
    "MarcelitoBielsa@hotmail.com"
)

const profesionalNueve = new Profesional("Diego Simeone",
    "Guitarrista",
    "img/simeone.png",
    18000,
    "DieguitoSimeone@hotmail.com"
)

const profesionalDiez = new Profesional("Jorge Sampaoli",
    "Veterinario",
    "img/sampaoli.png",
    12500,
    "JorgeSampaoli@gmail.com"
)

const arrayDeProfesionales = [profesionalUno, profesionalDos, profesionalTres, profesionalCuatro, profesionalCinco, profesionalSeis, profesionalSiete, profesionalOcho, profesionalNueve, profesionalDiez];

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

    const precio = document.createElement("p");
    precio.className = "card__precio";
    precio.innerText = "$" + trabajador.precio;
    
    const contacto = document.createElement("p");
    contacto.innerText = trabajador.contacto;
    contacto.className = "card__contacto";
    
    const boton = document.createElement("button");
    boton.className = "card__boton";
    boton.innerText = "Agregar contacto"
    boton.addEventListener("click", () => {
        let contactados = JSON.parse(localStorage.getItem("contactados")) || [];

        contactados.push(trabajador);

        localStorage.setItem("contactados", JSON.stringify(contactados));

        alert("Profesional agregado para contratar su servicio");
        console.log(mostrarProfesionalContactado());
        
    });
    
    card.append(nombre);
    card.append(profesion);
    card.append(img);
    card.append(precio)
    card.append(contacto);
    card.append(boton);
    
    contenedor.append(card)
}

const botones = document.getElementById("botones");

const eliminarProfesional = document.createElement("button");
eliminarProfesional.className = "eliminar_profesional";
eliminarProfesional.innerText = "Eliminar cita";
eliminarProfesional.addEventListener("click", () => {
    removeProfesional();
    alert("Su cita ha sido cancelada")
})

const sumarPrecio = document.createElement("button");
sumarPrecio.className = "sumar__precio";
sumarPrecio.innerText = "Mostrar total";
sumarPrecio.addEventListener("click", () => {
    sumarPrecioFinal()
})

botones.append(eliminarProfesional);
botones.append(sumarPrecio);

function mostrarProfesionalContactado() {
    const contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    if (contactados.length > 0) {
        console.log("Los profesionales contactados son:", contactados);
    } else {
        console.log("No hay profesionales contactados.");
    }
}

function removeProfesional() {
    localStorage.clear();
}

function sumarPrecioFinal() {
    const contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    const totalPrecio = contactados.reduce((acc, el) => acc + el.precio, 0);
    alert("El precio final de su compra es: $" + totalPrecio);
}

let edadUsuario;
    
while(true) {

    edadUsuario = parseFloat(prompt("DESEA CONTRATAR ALGÚN SERVICIO?\n Para proceder, por favor, indique su edad"));
    if (edadUsuario >= 18) {
        alert("Bienvenido, en esta web podrá contratar el servicio que requiera, atendido por los mejores profesionales del país");
        arrayDeProfesionales.forEach(el => cardProfesionales(el));
        break
    } else if(edadUsuario <= 17) {
        alert("Sos menor de edad, entra a la web con un mayor");
        break;

    } else {
        alert("No entendí tu respuesta");
    }

}
