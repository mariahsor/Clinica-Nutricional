var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500) 
})
/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Realizaron 2 clicks")
        this.remove()
    })
})*/