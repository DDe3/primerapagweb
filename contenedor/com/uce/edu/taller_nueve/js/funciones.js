console.log('esta barriendo el JS inicio')
function imprimirLog() {
    console.log("Log JS");
}


function cambiarEstado2() {
    let estado = document.getElementById("img1").style.display;
    if (estado == 'none') {
        estado = 'block';
    } else {
        estado = 'none';
    }
    document.getElementById("img1").style.display = estado;
}

console.log('esta barriendo el JS fin')

function tiposAtributos() {
    // var (no es comunmente usado)
    // const
    // let

    const mesesAnio = 12;

    console.log(mesesAnio);

    let mesesAnio2 = 12;
    mesesAnio2 = 13;
    console.log("Impresion LET")
    console.log(mesesAnio2);

    const diasSemana = ["Lunes","Martes","Miércoles"]
    console.log(diasSemana)
    diasSemana.push("Jueves")
    diasSemana.push("Viernes")
    const diasFinSemana = ["Sabado","Domingo"]
    console.log(diasSemana.concat(diasFinSemana))

    //Manejo de objetos
    console.log("Manejo de objetos")
    const persona = { 
        nombre:"Leonardo",
        apellido:"Salinas",
        edad:"24",
        universidad:"UCE"
    }
    console.log(persona)

    console.log("Objeto complejo")
    const persona2 = { 
        nombre:"Leonardo",
        apellido:"Salinas",
        edad:"24",
        universidad:"UCE",
        direccion: { calle:"Av. Maldonado", numero:"S10-259", referencia:"Bretaña"}
    }
    console.log(persona2)
}
