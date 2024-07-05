function correcto() {
    alert("CORRECTO GERSON");
}

function incorrecto() {
    alert("INCORRECTO, PEDAZO DE BURRO");
}

let bienvenida = alert("Bienvenido al Test de Cuánto sabes de los mundiales de fútbol, para empezar responde la siguiente pregunta: ")
let empezarTest = prompt("Quieres empezar el test? \n1. Responde SI en caso de querer hacerlo\n2. Responde NO si deseas no realizarlo").toUpperCase();

while (empezarTest === "SI") {
    alert("RESPONDER LAS SIGUIENTES PREGUNTAS CON SU RESPECTIVA LETRA (A,B,C,D)");
    let mundialesGanados= prompt("Quién es el equipo más ganador de Mundiales?\n A. BRASIL\n B. ALEMANIA \n C. ARGENTINA \n D.ITALIA").toUpperCase()
    if(mundialesGanados=== "A") {
        correcto();
    }
    else if(mundialesGanados!== "A") {
        incorrecto();
    }

    let maximoAnotador = prompt("Quién es el máximo goleador de los Mundiales \n A. Lionel Messi\n B. Mario Klose \n C. James Rodriguez \n D.Kylian Mbappé").toUpperCase();
    if (maximoAnotador === "B") {
        correcto();
    }
    else {
        incorrecto();
    }

    empezarTest = prompt("Quieres continuar con el test?\n1. Responde SI en caso de querer hacerlo\n2. Responde NO si deseas no realizarlo").toUpperCase();
    if (empezarTest !== "SI" || empezarTest !== "NO") {
        alert("No te entiendo mister, pero CHAU")
    }
}