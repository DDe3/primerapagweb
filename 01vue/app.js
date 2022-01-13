console.log("Objeto de vue")
console.log(Vue)

const miApp = Vue.createApp({
    /*
    template:`
    <h1>Hola mundo</h1>
    <p>Este es mi primer proyecto con vue</p>
    {{1+1}}
    `
    */
   data() {
       return {
           mensaje: "Mensaje monitoreado",
           mensaje2: "Nuevo mensaje monitoreado",
           mensaje3: "Texto en minusculas"
       }

   },
   methods:{
       cambiarMensaje() {
           this.mensaje = "Cambie este mensaje"
           this.mensaje2 = "Cambie este mensaje"
       },
       cambiarTextoMayuscula() {
           this.mensaje3 = this.mensaje3.toUpperCase()

       }
   }

})

miApp.mount('#myApp')