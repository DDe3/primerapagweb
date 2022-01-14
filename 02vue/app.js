
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
            miArreglo: personas,
            nuevoNombre: "Valor Inicial",
            nuevaEdad : "0"
        }
    },
    methods: {
        metodoTeclado() {
            //console.log(this.nuevaPropiedad)
            //console.log(event)
            this.miArreglo.unshift( { nombre: this.nuevoNombre, edad: this.nuevaEdad })

            //charCode == 13 ? this.miArreglo.unshift( { nombre: this.nuevaPropiedad }) : false
            // Metodo Push para agregar elemento al final
            //this.miArreglo.push( {
            //    nombre: this.nuevaPropiedad,
            //    edad: "Nuevo Dato"
            //})


            // Metodo Unshift para agregar elemento al inicio
            
        }
    }

})

myApp.mount("#myApp")