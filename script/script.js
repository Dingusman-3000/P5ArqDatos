window.onload=function(){
//Obtiene en una variable el Botón Mostrar Artículos
var btn = document.getElementById("load")
//Se registra un evento al dar clic
btn.addEventListener("click", CargarArticulos)
//Se obtiene en una variable el elemento donde se agregarán los artículos
var div_art= document.getElementById("article")

//Cuando se da clic en botón se ejecuta el método CargarArticulos
function CargarArticulos()
{
//Se crea el Objeto XMLHttpRequest
//El uso de este objeto es lo que conocemos como AJAX
//También conocido como Javascript asíncrono
var xhttp = new XMLHttpRequest()
//Verifica que la conexión esta lista
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200)
{
//Cuando esta lista la conexión se ejecuta la función leerJSON
leerJSON(this)
}
};

//Cuando se entabla la conexión con el servidor se obtiene el archivo articulos.json
xhttp.open("GET", "data/articulos.json", true)
//Se envia la solicitud de forma asincrona
xhttp.send()
}

//Funcion que se ejecuta cuando se entablo conexion con el servidor
//Y esta listo para enviar datos
function leerJSON(respuestaJSON)
{
//Se obtiene los datos del servidor y se convierte a objeto Javascript
var objJson = JSON.parse(respuestaJSON.responseText)
//Variables de apoyo para recorrer el objeto JSON
var i
//Limpia la variable
div_art.innerHTML=""

//Se obtiene cada objeto del archivo JSON
//Este ciclo se ejecuta para cada articulo
for ( i in objJson.articulos) {
//Se crea un elemento div para estructurar el articulo
var divCard = document.createElement("div")
//Se le asigna una clase para aportar estilo
divCard.className="article"
//Se crea una imagen
var imagenArticulo = document.createElement("img")
//Imagen se asigna con la url que almacena en el objeto JSON
imagenArticulo.src = objJson.articulos[i].imagen
//Se le asigna una clase para aportar estilo
imagenArticulo.className="image-article"
//Se agrega al div una imagen
divCard.appendChild(imagenArticulo)

//Se crea elemento div que forma el contenido del articulo
var divBody = document.createElement("div")
//Se agrega al div el articulo
divCard.appendChild(divBody)

//Se crea elemento h4 que forma el titulo del articulo
var encabezadoh4 = document.createElement("h4")
//Se asigna el titulo almacenado en el objeto JSON
encabezadoh4.innerHTML=objJson.articulos[i].titulo
//Se agrega al div el titulo del articulo
divBody.appendChild(encabezadoh4)

//Se crea elemento h6 que agrega el autor al contenido del articulo
var encabezadoh6 = document.createElement("h6")
//Se asigna el autor almacenado en el objeto JSON
encabezadoh6.innerHTML=objJson.articulos[i].autor
//Se agrega al div el nombre del autor
divBody.appendChild(encabezadoh6)

//Se crea elemento p que forma contenido del articulo
var parrafoContenido = document.createElement("p")
//Se asigna el contenido almacenado en el objeto JSON
parrafoContenido.innerHTML=objJson.articulos[i].contenido
//Se agrega al div el contenido del articulo
divBody.appendChild(parrafoContenido)

//Se crea elemento de liga que forma boton del articulo
var botonArticulo = document.createElement("a")
//Se asigna clase al boton
botonArticulo.className="primary-btn"
//Se le asigna texto al boton
botonArticulo.innerHTML="Leer Mas"
//Se añade el botón a la estructura del contenido del artículo
divBody.appendChild(botonArticulo)
//Se añade toda la estructura del artículo el código HTML
div_art.appendChild(divCard)
}
}
}