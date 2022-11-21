let fortunaElon = "189000 millones de dólares :)"

function calcularAdivinanza() {
    
    let cantidad = document.getElementById("cantidad").value;
    let nombre = document.getElementById("nombre").value;

    if (cantidad >= 100000 && cantidad < 250000) {
        document.getElementById("adivina").innerHTML = `Hola ${nombre}, Estuviste muy CERCA de adivinar el número. La fortuna de Elon Musk es ${fortunaElon}. La diferencia es ${189000 - cantidad}`;

    } else {
        document.getElementById("adivina").innerHTML = `Hola ${nombre}, Estuviste muy LEJOS de adivinar el número. La fortuna de Elon Musk es ${fortunaElon}. La diferencia es ${189000 - cantidad}`;
    }
}
