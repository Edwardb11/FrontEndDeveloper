console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado='';
    if(document.getElementById('Suma').checked) {
        resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    }
    else if(document.getElementById('Resta').checked){
        resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    }
    else if(document.getElementById('Multiplicacion').checked){
        resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    }
    else if(document.getElementById('Division').checked){
        if (parseInt(operandoB.value) ===0) {
            document.getElementById('resultado').innerHTML = `Resultado: No se puede dividir entre 0`;
            return
        }
        resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    }
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function reset(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    operandoA.value=''
    operandoB.value=''
    document.getElementById('resultado').innerHTML = ' ';

}