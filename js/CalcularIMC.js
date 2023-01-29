
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    //kupesoEsValido = true;
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura)

    //verdadero o falso --> verdadero
    if (!pesoEsValido) {
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.style.backgroundColor = "orange"
    }

    //verdadero o falso --> verdadero
    if (!alturaEsValida) {
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        //diferentes formas de modificarse la interfaz
        paciente.classList.add("paciente-incorrecto")

    }

    //verdadero y verdadero --> verdadero
    //verdadero y falso --> falso
    //falso y falso --> falso
    if (pesoEsValido && alturaEsValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }

}

function calcularIMC(peso, altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if((peso>0 && peso<1000) || peso==""){
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura){
    if((altura >= 0) && (altura < 3.0)){
        return true;
    } else {
        return false;
    }
}

///mas
//tengo