// Obtiene el elemento <canvas> del documento HTML mediante su ID "canvas"
var canvas = document.getElementById("canvas");

/* 
   Obtiene el contexto de dibujo en 2D del canvas.
   Este objeto "ctx" permite acceder a las funciones de la API Canvas para dibujar.
*/
var ctx = canvas.getContext("2d");

/* 
   Define el color de relleno que se usará para dibujar las formas en el canvas.
   En este caso, el color se establece en "green" (verde).
*/
ctx.fillStyle = "rgb(109, 153, 255)";

/* 
   Dibuja un rectángulo relleno en el canvas con las siguientes propiedades:
   - (10, 10) → Coordenadas (x, y) de la esquina superior izquierda del rectángulo.
   - 100 → Ancho del rectángulo en píxeles.
   - 100 → Alto del rectángulo en píxeles.
*/
ctx.fillRect(30, 30, 250, 250);
