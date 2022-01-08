const pokemones = [
    {urlbn:"images/pnegro.jpg", urlcolor:"images/pcolor.jpg", nombre:"excadrill"},
    {urlbn:"images/pnegro2.PNG", urlcolor:"images/pcolor2.PNG", nombre:"tornadus-incarnate"}
]
let nombresPokemon = [
    "tornadus-incarnate",
    "drilbur",
    "ninjask",
    "excadrill"
]

let pokemon = {}


function randomPokemon() {
    random = getRandomInt(2);
    pokemon = pokemones[random]
    console.log("Pokemon random: ", pokemon)
}

function iniciar() {
    randomPokemon()
    const {urlbn} = pokemon
    console.log(urlbn)
    mostrarImagen(urlbn)
    deshabilitarBoton()
    randomTextoBotones()
    mostrarBotones()
}

function mostrarImagen(url) {
    document.getElementById("img1").src = url
}

function deshabilitarBoton() {
    document.getElementById("boton0").style.display = "none"
}


function adivinar(respuesta) {
    const {urlbn, urlcolor, nombre} = pokemon
    mostrarImagen(urlcolor)
    ocultarMostrarRespuesta()
    if (respuesta==nombre) {
        correcto()
    } else {
        incorrecto()
    }
}

function reiniciar() {
    randomPokemon()
    const {urlbn} = pokemon
    mostrarImagen(urlbn)
    document.getElementById("textoInicial").style.color="black"
    document.getElementById("respuesta").style.display="none";
    randomTextoBotones()
}



function ocultarMostrarRespuesta() {
    let estado = document.getElementById("respuesta");
    if (estado.style.display === "none") {
        estado.style.display = "block";
    } else {
        estado.style.display = "none";
    }
}

function correcto() {
    document.getElementById("respuesta").innerHTML="Felicitaciones, has seleccionado la opción correcta"
    document.getElementById("textoInicial").style.color="yellow"
}

function incorrecto() {
    document.getElementById("respuesta").innerHTML="Pokémon incorrecto, la respuesta es: excadril"
    document.getElementById("textoInicial").style.color="red"
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomTextoBotones() {
    const botones = [
        document.getElementById("boton1"),
        document.getElementById("boton2"),
        document.getElementById("boton3"),
        document.getElementById("boton4"),
    ]
    let nombres = nombresPokemon
    botones.forEach(boton => {
        let nombre = nombres[getRandomInt(nombres.length)]
        nombres = nombres.filter(item => item !== nombre)
        console.log(boton)
        boton.innerHTML=nombre
    });

    
}

function mostrarBotones() {
    const botones = [
        document.getElementById("boton1"),
        document.getElementById("boton2"),
        document.getElementById("boton3"),
        document.getElementById("boton4"),
        document.getElementById("boton5")
    ]
    botones.forEach(boton => boton.style.display="block")
}

