function correcto() {
    alert("CORRECTO GERSON");
}

function incorrecto() {
    alert("INCORRECTO, PEDAZO DE BURRO");
}

alert("Bienvenido al test de ¿Cuánto sabes de los mundiales de fútbol?, para empezar responde la siguiente pregunta: ")
let empezarTest = prompt("Quieres empezar el test? \n1. Responde SI en caso de querer hacerlo\n2. Responde NO si deseas no realizarlo").toUpperCase();

while (empezarTest === "SI") {
    alert("RESPONDER LAS SIGUIENTES PREGUNTAS CON SU RESPECTIVA LETRA (A,B,C,D)");
    let mundialesGanados= prompt("Quién es el equipo más ganador de Mundiales?\n A. BRASIL\n B. ALEMANIA \n C. ARGENTINA \n D. ITALIA").toUpperCase()
    if(mundialesGanados=== "A") {
        correcto();
    }
    else if(mundialesGanados!== "A") {
        incorrecto();
        alert("La respuesta es Brasil")
    }

    let maximoAnotador = prompt("Quién es el máximo goleador de los Mundiales \n A. Lionel Messi\n B. Mario Klose \n C. James Rodriguez \n D. Kylian Mbappé").toUpperCase();
    if (maximoAnotador === "B") {
        correcto();
    }
    else {
        incorrecto();
        alert("La respuesta es Mario Klose")
    }

    let ultimoGanador = prompt("Que selección fue la última en ganar la Copa del Mundo?  \n A. Brasil\n B. Alemania \n C. Francia \n D. Argentina").toUpperCase();
    if (ultimoGanador === "D"){
        correcto();
    }
    else {
        incorrecto();
        alert("La respuesta es ARGENTINA")
    }

    alert("Vamos con algunitas más dificiles, las anteriores estaban fáciles");
    let masFaltasRecibidas = prompt("Que jugador en la historia de los mundiales ha recibido más faltas en la competición? \n A. Lionel Messi\n B. Ronaldo Nazario \n C. Neymar Jr \n D. Diego Armando Maradona").toUpperCase();
    if(masFaltasRecibidas === "D") {
        correcto();
    }
    else {
        incorrecto();
        alert("La respuesta es Diego Armando Maradona")
    }

    let golesMataMataCr7 = prompt("Cuantos goles en fase mata-mata tiene Cristiano Ronaldo en mundiales?  \n A. 3\n B. 2 \n C. 0 \n D. 5").toUpperCase();
    if(golesMataMataCr7 === "C") {
        correcto();
    }
    else {
        incorrecto();
        alert("La respuesta es 0")
    }

    empezarTest = prompt("Quieres realizar el test nuevamente?\n1. Responde SI en caso de querer hacerlo\n2. Responde NO si deseas no realizarlo").toUpperCase();
    if (empezarTest !== "SI" && empezarTest !== "NO") {
        alert("No te entiendo mister, pero CHAU")
    }
}