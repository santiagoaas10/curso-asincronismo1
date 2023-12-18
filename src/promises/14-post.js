// Importa la biblioteca 'node-fetch', que proporciona una implementación de fetch para Node.js
import fetch from 'node-fetch';

// Definir la URL base de la API
const API = 'https://api.escuelajs.co/api/v1';

//haremos el postData para agregar data a la API
//método post
function postData(urlApi, data){
    const response = fetch(urlApi, {
        method:'POST',
        mode: 'cors',//cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},//necesario indicar que lo que se está enviando es de tipo json
        body:JSON.stringify(data)
    });
    return response;
}


//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": "Nunca pares de aprender",
    "price": 2,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));