const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

var operando1 = "";
var operando2 = "";
var operacionActual = "";

function agregarNumero(numero) {
    var pantalla = document.getElementById("pantalla");
    if (operacionActual === "") {
        operando1 += numero;
        pantalla.value = operando1;
    } else {
        operando2 += numero;
        pantalla.value = operando1 + operacionActual + operando2;
    }
}

function borrarPantalla() {
    var pantalla = document.getElementById("pantalla");
    operando1 = "";
    operando2 = "";
    operacionActual = "";
    pantalla.value = "";
}

function seleccionarOperacion(operacion) {
    var pantalla = document.getElementById("pantalla");
    operacionActual = operacion;
    pantalla.value = operando1 + operacionActual;
}

function calcular() {
    var pantalla = document.getElementById("pantalla");
    var resultado;

    if (operando2 !== "") {
        switch (operacionActual) {
            case '+':
                resultado = parseFloat(operando1) + parseFloat(operando2);
                break;
            case '-':
                resultado = parseFloat(operando1) - parseFloat(operando2);
                break;
            case '*':
                resultado = parseFloat(operando1) * parseFloat(operando2);
                break;
            case '/':
                resultado = parseFloat(operando1) / parseFloat(operando2);
                break;
            default:
                resultado = "Error";
                break;
        }

        pantalla.value = resultado;
        operando1 = resultado.toString();
        operando2 = "";
        operacionActual = "";
    }

    document.addEventListener("keydown", function (event) {
        if (event.key >= "0" && event.key <= "9") {
            agregarNumero(parseInt(event.key));
        }
        else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
            seleccionarOperacion(event.key);
        }
        else if (event.key === "Enter") {
            event.preventDefault();
            calcular();
        }
    });
}
