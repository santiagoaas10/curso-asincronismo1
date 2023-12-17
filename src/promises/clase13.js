// Importa la biblioteca 'node-fetch', que proporciona una implementación de fetch para Node.js
import fetch from 'node-fetch';

// Definir la URL base de la API
const API = 'https://api.escuelajs.co/api/v1';

// Definir una función llamada fetchData que toma la URL de la API como argumento
function fetchData(urlApi){
    // Retorna la llamada a fetch, que devuelve una promesa representando la solicitud HTTP
    return fetch(urlApi);
}

// Realiza una solicitud a la API para obtener la lista de productos
fetchData(`${API}/products`)
    // Convierte la respuesta a formato JSON
    .then(response => response.json())
    // Maneja los datos JSON resultantes
    .then(products => {
        // Imprime la lista de productos en la consola
        console.log(products);
    })
    // Encadena otro .then para realizar una acción adicional
    .then(() => {
        // Imprime 'hola' en la consola
        console.log('hola');
    })
    // Captura cualquier error que ocurra durante la solicitud y lo imprime en la consola
    .catch(error => console.log(error));
    