
let hora = document.getElementById('hora');
let minutos = 60;
let boton = document.getElementById('boton');
let resultado = document.getElementById('resultado');

function convertir(hora){
    let formula = hora.value * minutos * 60;
    resultado.innerHTML = formula + ' segundos.';
    resultado.style.display = 'block';
    return resultado;
}