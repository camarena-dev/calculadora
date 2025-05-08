let numero;
let operador;

function mostrar(boton) {
    document.getElementById("pantalla").textContent += boton.textContent;
}

function limpiar() {
    document.getElementById("pantalla").textContent = "";
}

function borrar() {
    let length = document.getElementById("pantalla").textContent.length;
    document.getElementById("pantalla").textContent = document.getElementById("pantalla").textContent.slice(0, length - 1);
}

function operacion(boton) {
    operador = boton.textContent;
    numero = document.getElementById("pantalla").textContent;
    if(operador === "+/-"){
        numero = -numero;
        document.getElementById("pantalla").textContent = numero;
        return;
    } else if(operador === "%"){
        numero = numero / 100;
        document.getElementById("pantalla").textContent = numero;
        return;
    }
    document.getElementById("pantalla").textContent = "";
}

function resultado() {
    let cur = document.getElementById("pantalla").textContent;
    let resultado;
    switch (operador) {
        case "+":
            resultado = parseFloat(numero) + parseFloat(cur);
            break;
        case "-":
            resultado = parseFloat(numero) - parseFloat(cur);
            break;
        case "÷":
            resultado = parseFloat(numero) / parseFloat(cur);
            break;
        case "*":
            resultado = parseFloat(numero) * parseFloat(cur);
            break;
    }
    document.getElementById("pantalla").textContent = resultado;
}