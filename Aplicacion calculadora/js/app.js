console.log("Aplicación Calculadora");

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = "";
  let operación = document.getElementById("operacion").value;
  console.log(operación);
  switch (operación) {
    case "Suma":
      resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
      break;
    case "Resta":
      resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
      break;
    case "Multiplicacion":
      resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
      break;
    case "Division":
      if (parseInt(operandoB.value) === 0) {
        document.getElementById(
          "resultado"
        ).innerHTML = `Resultado: No se puede dividir entre 0`;
        return;
      }
      resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
      break;

    case "exponenciacion":
      resultado = (parseInt(operandoA.value) ** parseInt(operandoB.value));
      break;
    default:
      resultado = "Ha ocurrido un error, intente de nuevo.";
      break;
  }
  if (isNaN(resultado)) resultado = "La operación no incluye números";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
function reset() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  operandoA.value = "";
  operandoB.value = "";
  document.getElementById("resultado").innerHTML = " ";
}
