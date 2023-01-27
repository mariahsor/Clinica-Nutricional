
var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

pesoEsValido = true;
alturaEsValida = true;

//verdadero o falso --> verdadero
if((peso < 0)||(peso > 1000)){
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
}

//verdadero o falso --> verdadero
if((altura < 0)||(altura > 3.0)){
    console.log("Peso incorrecto");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
}

//verdadero y verdadero --> verdadero
//verdadero y falso --> falso
//falso y falso --> falso
if(pesoEsValido && alturaEsValida){
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;
}

