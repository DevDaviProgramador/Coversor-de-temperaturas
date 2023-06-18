function converterTemperatura(from, to) {
    let inputFrom = document.getElementById(from);
    let inputTo = document.getElementById(to);

    if (inputFrom.value === "") {
        inputTo.value = "";
        return;
    }

    let temperatura = parseFloat(inputFrom.value);

    if (isNaN(temperatura)) {
        inputTo.value = "";
        return;
    }

    let result;

    if (from === "fahrenheit") {
        if (temperatura < -459.67) {
            exibirAlerta("O valor em Fahrenheit não pode ser menor que -459,67");
            inputFrom.value = "";
            return;
        }
        result = (temperatura - 32) * 5 / 9;
    } else if (from === "celsius") {
        if (temperatura < -273.15) {
            exibirAlerta("O valor em Celsius não pode ser menor que -273,15");
            inputFrom.value = "";
            return;
        }
        result = (9 * temperatura / 5) + 32;
    }

    inputTo.value = result.toFixed(2);
}

function exibirAlerta(mensagem) {
    let alerta = document.getElementById("alert");
    alerta.textContent = mensagem;
    alerta.style.display = "block";
    setTimeout(function () {
        alerta.style.display = "none";
    }, 3000);
}
