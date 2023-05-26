// variables DOM
const usuario_score_span = document.getElementById("usuario_score");
const maquina_score_span = document.getElementById("maquina_score");
const tablero_score_div = document.querySelector(".tablero_score");
const resultado_div = document.querySelector(".resultado > h2");
const movida_div = document.querySelector(".movida")
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");

// variables
let puntajeUsuario = 0;
let puntajeMaquina = 0;

//EventListener
piedra_div.addEventListener("click", function () {
    jugar("piedra")
})

papel_div.addEventListener("click", function () {
    jugar("papel");
})

tijera_div.addEventListener("click", function () {
    jugar("tijera")
})

function obtenerEleccionMaquina() {
    const elementos = ["piedra", "papel", "tijera"]
    let valorSelecionado = Math.floor(Math.random() * 3);
    return elementos[valorSelecionado];
}


//logica juego

function jugar(eleccion_usuario) {

    const eleccionMaquina = obtenerEleccionMaquina();
    const eleccionUsuario = eleccion_usuario;

    let compararElecciones = eleccionUsuario + eleccionMaquina;

    switch (compararElecciones) {
        case "piedratijera":
        case "tijerapapel":
        case "papelpiedra":
            ganar(eleccionUsuario,eleccionMaquina);
            break;

        case "piedrapapel":
        case "papeltijera":
        case "tijerapiedra":
            perder(eleccionUsuario,eleccionMaquina);;
            break;

        case "piedrapiedra":
        case "tijeratijera":
        case "papelpapel":
            empatar(eleccionUsuario,eleccionMaquina);;
            break;
    }
}


function ganar(eleccionUsuario,eleccionMaquina) {
    puntajeUsuario++;
    usuario_score_span.innerHTML=puntajeUsuario;
    maquina_score_span.innerHTML=puntajeMaquina;
    resultado_div.innerHTML= `Tu: ${eleccionUsuario}  le gana a ${eleccionMaquina} de la maquina`
}

function perder(eleccionUsuario,eleccionMaquina) {
    puntajeMaquina++;
    usuario_score_span.innerHTML=puntajeUsuario;
    maquina_score_span.innerHTML=puntajeMaquina;
    resultado_div.innerHTML= `Tu: ${eleccionUsuario}  pierde con  ${eleccionMaquina} de la maquina`
}
function empatar(eleccionUsuario,eleccionMaquina) {
    usuario_score_span.innerHTML=puntajeUsuario;
    maquina_score_span.innerHTML=puntajeMaquina;
    resultado_div.innerHTML= `Tu: ${eleccionUsuario}  empata con  ${eleccionMaquina} de la maquina`
}


