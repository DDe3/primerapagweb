console.log(angular)

var app = angular.module("app", [])

app.controller("controladorHolaMundo",

    function ($scope) {
        $scope.mensaje = "Hola mundo con Angular"
    })

/*
    La aplicación Angular está definida por ng-app="app". La aplicación se ejecuta dentro de <div>.
    El atributo ng-controller="controladorHolaMundo" es una directiva de Angular. Define un controlador.
    La función controladorHolaMundo es una función de JavaScript.
    Angular invocará el controlador con un objeto $scope.
    En Angular, $scope es el objeto de la aplicación (el propietario de las variables y funciones de la aplicación).
    El controlador crea una propiedad (mensaje) en el scope 
    Las directivas del modelo ng vinculan los campos de entrada a las propiedades del controlador (mensaje).
*/