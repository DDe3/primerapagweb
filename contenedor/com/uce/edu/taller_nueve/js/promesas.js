

function pruebaPromesas() {
    console.log("inicia la funcion")

    new Promise((resolve, reject) => {
        console.log("Aqui va lo que que quiero que haga mi promesa")
        let valor = Math.PI
        const respuesta = "El resultado es: "
        valor < 3 ? resolve(respuesta + valor) : reject({msg: "Algo salio mal", num: 5})
    }).then(respuesta => console.log(respuesta)).catch( obj =>  {
        const {msg, num} = obj
        console.log(msg, num)
    })

    console.log("fin de la funcion")
}