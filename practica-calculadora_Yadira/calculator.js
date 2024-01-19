const calculatorModule = (() => {
  let entradaActual = "0";
  let operador = "";
  let entradaAnterior = "";
  let expresionCompleta = "";

  const resultadoDisplay = document.getElementById("result");

  const actualizarDisplay = () => {
    resultadoDisplay.textContent = expresionCompleta || entradaActual;
  };

  const ingresarDigito = (digito) => {
    if (operador === "=") {
      limpiar();
    }

    if (entradaActual === "0" || operador === "=") {
      entradaActual = digito;
    } else {
      entradaActual += digito;
    }
    actualizarExpresionCompleta();
    actualizarDisplay();
  };

  const ingresarOperador = (op) => {
    if (operador && operador !== "=") {
      calcular();
    }
    entradaAnterior = entradaActual;
    entradaActual = "";
    operador = op;
    actualizarExpresionCompleta();
    actualizarDisplay();
  };

  const calcular = () => {
    const prev = parseFloat(entradaAnterior);
    const actual = parseFloat(entradaActual);

    if (!isNaN(prev) && !isNaN(actual)) {
      if (operador === "+") {
        entradaActual = prev + actual;
      } else if (operador === "-") {
        entradaActual = prev - actual;
      } else if (operador === "*") {
        entradaActual = prev * actual;
      } else if (operador === "/") {
        entradaActual = prev / actual;
      }
    }

    operador = "=";
    entradaAnterior = entradaActual;
    expresionCompleta = "";
    actualizarDisplay();
  };

  const limpiar = () => {
    entradaActual = "0";
    operador = "";
    entradaAnterior = "";
    expresionCompleta = "";
    actualizarDisplay();
  };

  const actualizarExpresionCompleta = () => {
    expresionCompleta = operador && operador !== "=" ? `${entradaAnterior} ${operador} ${entradaActual}` : "";
  };

  const manejarClicBoton = (event) => {
    const valorBoton = event.target.textContent;

    if (valorBoton >= "0" && valorBoton <= "9") {
      ingresarDigito(valorBoton);
    } else if (valorBoton === "+" || valorBoton === "-" || valorBoton === "*" || valorBoton === "/") {
      ingresarOperador(valorBoton);
    } else if (valorBoton === "=") {
      calcular();
    } else if (valorBoton === "C") {
      limpiar();
    }
  };

  document.getElementById("calculator").addEventListener("click", manejarClicBoton);

  return {
    ingresarDigito,
    ingresarOperador,
    calcular,
    limpiar
  };
})();

