
const personas = [
    {nombre:"Leonardo Salinas", edad:24},
    {nombre:"Adrian Bolaños", edad:12},
    {nombre:"Milena Jaramillo", edad:20},
    {nombre:"Pedro Salas", edad:30},
    {nombre:"Armando Navarro", edad:19},
    {nombre:"Fernando Escandon", edad:33},
    {nombre:"Andres Ferreira", edad:40}
]

const myApp = Vue.createApp({

    data() {
        return {
            mensaje: "Hola mundo",
            miArreglo: personas
        }
    }

})

myApp.mount("#myApp")