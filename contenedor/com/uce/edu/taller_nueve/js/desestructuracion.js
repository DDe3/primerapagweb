
// Desestructuración de arreglos
function desestructurarArreglo() {
    const [dia1, dia2, dia3, dia4, dia5, dia6, dia7] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    console.log(dia1)

    const colores = ["amarillo","azul","rojo"]
    const [color1, color2, color3] = colores
    console.log(color1, color2, color3)
}

// Desestructuración de objetos

function desestructurarObjeto() {
    const {id, nombre, apellido} = {
        id: 12,
        nombre: "Leonardo",
        apellido: "Salinas",
    }

    console.log(id)
    console.log(nombre)
    console.log(apellido)

    const estudiante = {
        cedula: "1725875569",
        ciudad: "Quito",
        provincia: "Pichincha",
    }

    const {cedula, ciudad, provincia} = estudiante
    console.log("Objeto desestructurado")
    console.log(cedula,ciudad,provincia)
    this.buscarBaseDatos(cedula)




}

function buscarBaseDatos(cedula) {
    console.log("Buscando cedula: ", cedula)


}