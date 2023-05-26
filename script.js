// variables DOM

const usuario_score_span = document.getElementById("usuario_score");
const maquina_score_span = document.getElementById("maquina_score");

const tablero_score_div = document.querySelector(".tablero_score");
const resultado_div = document.querySelector(".resultado");
const movida_div = document.querySelector(".movida")

const piedra_div= document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");


piedra_div.addEventListener("click", function() {
    juego("piedra")
})

papel_div.addEventListener("click", function() {
    juego("papel");
})

tijera_div.addEventListener("click", function() {
    juego("tijera")
})

function obtenerEleccionMaquina(){
    const elementos = ["piedra" , "papel" ,"tijera"]
    let valorSelecionado = Math.floor(Math.random() * 3);
    return elementos[valorSelecionado];
}

function juego(eleccion_usuario){
    const eleccionMaquina = obtenerEleccionMaquina();
    const eleccionUsuario = eleccion_usuario;
    console.log(eleccionMaquina);
    console.log(eleccionUsuario);
    
}

console.log(obtenerEleccionMaquina());


