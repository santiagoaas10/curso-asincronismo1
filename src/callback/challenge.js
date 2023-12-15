// Requiere el módulo xmlhttprequest y asigna la clase XMLHttpRequest a la constante XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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

// Realiza una serie de solicitudes anidadas y muestra los resultados
fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);

    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);

            // Imprime algunos datos obtenidos de las solicitudes
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
