document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada, iniciando dibujos...");
    drawRectangles();
    drawTriangle();
    drawHappyFace();
    drawLinea();
    drawTriangulos();
    drawFiguras();
    drawCorazon();
    drawPath2();
});

function drawRectangles() {
    console.log("Dibujando rectángulo...");
    const canvas = document.getElementById("canvasRect");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(226, 247, 0)"
        ctx.fillRect(100, 100, 100, 100);
    } else {
        console.error("Canvas no encontrado: canvasRect");
    }
}

function drawTriangle() {
    console.log("Dibujando triángulo...");
    const canvas = document.getElementById("canvasTriang");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(255, 5, 251)"
        ctx.beginPath();
        ctx.moveTo(150, 80);
        ctx.lineTo(220, 240);
        ctx.lineTo(80, 240);
        ctx.closePath();
        ctx.fill();
    } else {
        console.error("Canvas no encontrado: canvasTriang");
    }
}

function drawHappyFace() {
    console.log("Dibujando cara feliz...");
    const canvas = document.getElementById("canvasCara");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 150, 80, 0, Math.PI * 2, true);
        ctx.stroke();
    } else {
        console.error("Canvas no encontrado: canvasCara");
    }
}

function drawLinea() {
    console.log("Dibujando línea...");
    const canvas = document.getElementById("canvasLinea");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else {
        console.error("Canvas no encontrado: canvasLinea");
    }
}

function drawTriangulos() {
    console.log("Dibujando triángulos...");
    const canvas = document.getElementById("canvasTriangulos");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(100, 200);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 5, 118)"
        ctx.fill();
    } else {
        console.error("Canvas no encontrado: canvasTriangulos");
    }
}

function drawFiguras() {
    console.log("Dibujando círculo...");
    const canvas = document.getElementById("canvasFiguras");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = "rgb(5, 163, 255)"
        ctx.stroke();
    } else {
        console.error("Canvas no encontrado: canvasFiguras");
    }
}

function drawCorazon() {
    console.log("Dibujando corazón...");
    const canvas = document.getElementById("canvasCorazon");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.save();
        ctx.translate(75, 77.5);
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fillStyle = "rgb(63, 5, 255)"
        ctx.fill();
        ctx.restore();
    } else {
        console.error("Canvas no encontrado: canvasCorazon");
    }
}

function drawPath2() {
    console.log("Dibujando Path2D...");
    const canvas = document.getElementById("canvasPath2D");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const rectangle = new Path2D();
        rectangle.rect(125, 125, 50, 50);
        ctx.strokeStyle = "rgb(101, 255, 5)";
        ctx.stroke(rectangle);
    } else {
        console.error("Canvas no encontrado: canvasPath2D");
    }
}
