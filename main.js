
// CREACIÓN DE CLASES Y OBJETOS

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


// FUNCIÓN PARA PASAR A UN FOREACH Y MOSTRAR EN EL DOM TODOS LOS OBJETOS

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

        const yaAñadido = contactados.some(el => el.nombre === trabajador.nombre);
        if (yaAñadido) {
            Swal.fire({
                title: "ERROR",
                text: "Este usuario ya ha sido añadido a tu servicio",
                icon: "error",
                customClass: {
                    popup: "popup",
                    title: "titulo-sweat",   
                    confirmButton: "boton-sweat"
                }
            });;
        } else {
            contactados.push(trabajador);
            localStorage.setItem("contactados", JSON.stringify(contactados));
            Toastify({
                text: `Contacto añadido: 
                ${trabajador.nombre}`,
                duration: 3000,
                position: "right",
                gravity: "bottom",
                style: {
                    background: "#FFC107",
                    color: "#000",
                    fontWeight: "500",
                    borderRadius: "20px"
                }
                }).showToast();

        sumarPrecioFinal();
        console.log(mostrarProfesionalContactado());
        }
    });
    
    card.append(nombre);
    card.append(profesion);
    card.append(img);
    card.append(precio)
    card.append(contacto);
    card.append(boton);
    
    contenedor.append(card)
}

// CREACION DE LOS BOTONES Y AGREGANDOLOS AL DOM CON APPEND

const botones = document.getElementById("botones");

const eliminarProfesional = document.createElement("button");
eliminarProfesional.className = "eliminar_profesional";
eliminarProfesional.innerText = "Eliminar todo";
eliminarProfesional.addEventListener("click", () => {
    removeProfesional();
})

const sumarPrecio = document.createElement("button");
sumarPrecio.className = "sumar__precio";
sumarPrecio.innerText = "Mostrar total";
sumarPrecio.addEventListener("click", () => {
    mostrarPrecioFInal()
})

const eliminarUltimoProfesional = document.createElement("button");
eliminarUltimoProfesional.className = "eliminar__ultimo__profesional";
eliminarUltimoProfesional.innerHTML = "Borrar último profesional"
eliminarUltimoProfesional.addEventListener("click", () => {
    removerUltimo();
})

botones.append(eliminarProfesional);
botones.append(eliminarUltimoProfesional);
botones.append(sumarPrecio);


// CREACION DE LAS FUNCIONES

function mostrarProfesionalContactado() {
    let contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    
    //Al final SI pude agregar operadores ternarios.
    contactados.length > 0 ? console.log("Los profesionales contactados son: ", contactados) : console.log("No hay profesionales contactados");
}


function removeProfesional() {

    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4CAF50",
        cancelButtonColor: "#FF5733",  
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            let contactados = JSON.parse(localStorage.getItem("contactados")) || [];
            if (contactados.length > 0) {
                localStorage.clear(); 
                document.getElementById("dom__div").innerText = ""; 
                sumarPrecioFinal();
                Swal.fire({
                    title: "Eliminado!",
                    text: "Tus contactos han sido eliminados.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "No tienes contactos en tu carrito.",
                    icon: "error"
                });
            }
        }
    });
}



function removerUltimo() {
    let contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    if (contactados.length > 0) {
        contactados.pop();
        localStorage.setItem("contactados", JSON.stringify(contactados));
        sumarPrecioFinal();
        console.log("Profesionales contactados actualizados:", contactados);
    } else {
        Swal.fire({
            title: "Error",
            text: "No hay profesionales a eliminar",
            icon: "error"
        });;
    }
}

function sumarPrecioFinal() {
    const contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    const domDiv = document.getElementById("dom__div");
    domDiv.innerText = "";
    const textoTotalPrecio = document.createElement("p");
    if (contactados.length === 0) {
        textoTotalPrecio.innerText = "No agregaste a ningún contacto";
    } else {
        const totalPrecio = contactados.reduce((acc, el) => acc + el.precio, 0);
        textoTotalPrecio.innerText = "Precio total de los servicios: $" + totalPrecio;
        textoTotalPrecio.className = "preciofinal__texto"
        domDiv.append(textoTotalPrecio);
    }
}

function mostrarPrecioFInal() {
    const contactados = JSON.parse(localStorage.getItem("contactados")) || [];
    if (contactados.length === 0) {
        Swal.fire({
            title: "No hay contactos",
            text: "Tu carrito está vacío, no contrataste ningún servicio",
            icon: "error"
        });;
    } else {
        const totalPrecio = contactados.reduce((acc, el) => acc + el.precio, 0);
        Swal.fire("El monto final de su compra es: $" + totalPrecio);
    }
}


arrayDeProfesionales.forEach(el => cardProfesionales(el));