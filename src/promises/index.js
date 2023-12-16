// Crear una nueva promesa llamada "promise"
const promise = new Promise(function (resolve, reject) {
    // La promesa se resuelve con el valor 'hey!'
    resolve('hey!');
});

// Definir la cantidad de vacas
const cows = 9;

// Crear una nueva promesa llamada "countCows"
const countCows = new Promise(function(resolve, reject) {
    // Verificar si hay más de 10 vacas
    if (cows > 10) {
        // Si hay más de 10 vacas, resolver la promesa con un mensaje que incluya la cantidad de vacas
        resolve(`we have ${cows} cows on the farm`);
    } else {
        // Si no hay más de 10 vacas, rechazar la promesa con un mensaje de error
        reject("there are no cows on the farm");
    }
});

// Usar el método then para manejar la resolución exitosa de la promesa "countCows"
countCows.then((result) => {
    // Este bloque se ejecutará si la promesa se resuelve correctamente
    console.log(result);
}).catch((error) => {
    // Este bloque se ejecutará si la promesa es rechazada
    console.log(error);
}).finally(() => {
    // Este bloque se ejecutará independientemente de si la promesa se resuelve o se rechaza
    console.log('Finally');
});



/* Crear Promesa "promise":

const promise = new Promise(function (resolve, reject) { ... });: Se crea una nueva promesa llamada "promise" que se resuelve inmediatamente con el valor 'hey!'.
Crear Promesa "countCows":

const countCows = new Promise(function(resolve, reject) { ... });: Se crea una nueva promesa llamada "countCows" que se resolverá o se rechazará según la cantidad de vacas.
Manejo de Resolución y Rechazo de "countCows":

countCows.then((result) => { ... }).catch((error) => { ... }): Se utilizan los métodos then y catch para manejar la resolución exitosa y el rechazo de la promesa "countCows".
Método "then":

countCows.then((result) => { console.log(result); }): Si la promesa "countCows" se resuelve correctamente, se ejecutará el bloque de código dentro de then, imprimiendo el resultado.
Método "catch":

.catch((error) => { console.log(error); }): Si la promesa "countCows" es rechazada, se ejecutará el bloque de código dentro de catch, imprimiendo el mensaje de error.
Método "finally":

.finally(() => { console.log('Finally'); }): Este bloque se ejecutará independientemente de si la promesa se resuelve o se rechaza. En este caso, imprimirá 'Finally'.
Arrow Functions:

(result) => { ... }: Sintaxis de función flecha. Es una forma más concisa de escribir funciones en JavaScript.
En resumen, este código demuestra cómo crear y usar promesas en JavaScript, así como cómo manejar la resolución y el rechazo de las mismas mediante los métodos then, catch, y finally. */