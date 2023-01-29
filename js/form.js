//Adicionar paciente

var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);
    //validar paciente
    var errores = validarPaciente(paciente);

    if(errores.length>0) {
           //var mensajeError = document.querySelector("#mensaje-error")
            //mensajeError.textContent = error;
            //return; //corta y detiene
            exhibirMensajesErrores(errores);
            return;
        }
    
    
    var tabla = document.querySelector("#tabla-pacientes")
    tabla.appendChild(pacienteTr);
    form.reset();

    var mensajeError = document.querySelector("#mensaje-error");
    mensajeError.innerHTML = "";

});

function capturarDatosPaciente(form){
    //captura los datos del formulario
    //Creando la clase con sus atributos
     var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)

     }
    
     return paciente;
 
}

function construirTr(paciente){
      //Crear los tds y un tr de la tabla
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    //Asignación al tr de los tds y a la tabla del tr
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"))

    return pacienteTr
}


function construirTd(dato, clase){

    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    var errores = []

    if (paciente.nombre.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0){
        errores.push("No puede haber ningún campo vacío");
    }

    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto")
    }
    
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecto")}
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-error")
    ul.innerHTML="";

    errores.forEach(function(error){
        var li= document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })

}



/*Asi es sin usar clases y objetos
 captura los datos del formulario
 var nombre = form.nombre.value;
 var peso = form.peso.value;
 var altura = form.altura.value;
 var gordura = form.gordura.value;
 
   //Crear los tds y un tr de la tabla
    pacienteTr = document.createElement("tr")
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //Asignar los valores de la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    //imcTd.textContent = calcularIMC(peso,altura);
    imcTd.textContent = paciente.imc;

    //Asignación al tr de los tds y a la tabla del tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)
 
 */