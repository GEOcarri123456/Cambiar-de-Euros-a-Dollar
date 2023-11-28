document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertirBtn').addEventListener('click', function() {
        var resultado = convertirMoneda();
        // Muestra el resultado en la consola del navegador
        console.log('Resultado: ' + resultado);
    });
});

function convertirMoneda() {
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var monedaOrigen = document.getElementById('monedaOrigen').value;
    var resultado;

    if (monedaOrigen === 'euros') {
        resultado = eurosADolares(cantidad);
    } else if (monedaOrigen === 'dolares') {
        resultado = dolaresAEuros(cantidad);
    } else {
        resultado = 'Error en la selección de moneda';
    }

    // Muestra el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;

    return resultado;
}

function eurosADolares(euros) {
    var tipoCambio = 1.10;
    return euros * tipoCambio;
}

function dolaresAEuros(dolares) {
    var tipoCambio = 0.91;
    return dolares * tipoCambio;
}
