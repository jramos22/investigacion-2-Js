
//con este elemento podemos insertar contenido en el lugar que queramos del elemento padre que queramos.
let parrafoNuevo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo(segundo parrafo).'));

let segundoParrafo = document.getElementById('padre').getElementsByTagName('p')[1];

document.getElementById('padre').insertBefore(parrafoNuevo,segundoParrafo);
console.log(parrafoNuevo);