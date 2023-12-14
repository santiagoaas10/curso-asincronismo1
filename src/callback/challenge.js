// Requiere el módulo xmlhttprequest y asigna la clase XMLHttpRequest a la constante XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest');

// URL de la API a la que se realizarán las solicitudes
const API = 'https://api.escuelajs.co/api/v1';

// Función para realizar solicitudes HTTP
function fetchData(urlAPI, callback) {
    // Crea una nueva instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // Configura la solicitud GET a la URL proporcionada de manera asíncrona
    xhttp.open('GET', urlAPI, true);

    // Establece un evento para manejar cambios en el estado de la solicitud
    xhttp.onreadystatechange = function (event) {
        // Verifica si la solicitud ha alcanzado el estado "completado"
        if (xhttp.readyState === 4) {
            // Verifica si el estado de la respuesta es "OK" (código 200)
            if (xhttp.status === 200) {
                // Llama al callback con nulo para el error y el objeto JSON parseado como resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Si el estado de la respuesta no es "OK", crea un objeto Error y llama al callback con el error y nulo como resultado
                const error = new Error('Error ' + urlAPI);
                return callback(error, null);
            }
        }
    };

    // Envía la solicitud
    xhttp.send();
}