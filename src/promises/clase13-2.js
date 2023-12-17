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
    // Maneja los datos JSON resultantes (en este caso, una lista de productos)
    .then(products => {
        // Imprime la lista de productos en la consola
        console.log(products);

        // Realiza otra solicitud utilizando datos del primer resultado (solo el primer elemento)
        return fetchData(`${API}/products/${products[0].id}`);
    })
    // Convierte la respuesta de la segunda solicitud a formato JSON
    .then(response => response.json())
    // Maneja los datos JSON resultantes de la segunda solicitud (en este caso, un producto específico)
    .then(product => {
        // Imprime el título del producto en la consola
        console.log(product.title);

        // Realiza otra solicitud utilizando datos del producto obtenido (categoría del producto)
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    // Convierte la respuesta de la tercera solicitud a formato JSON
    .then(response => response.json())
    // Maneja los datos JSON resultantes de la tercera solicitud (en este caso, información de la categoría)
    .then(category => {
        // Imprime el nombre de la categoría en la consola
        console.log(category.name);
    })
    // Captura cualquier error que pueda ocurrir durante las solicitudes y lo imprime en la consola
    .catch(err => console.log(err))
    // Finalmente, se ejecuta siempre, independientemente de si las solicitudes son exitosas o fallan
    .finally(() => console.log('Finally'));