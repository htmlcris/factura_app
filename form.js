let nombreEstudiante = prompt("Ingresa el nombre:");
let edad=Number(prompt("Edad"));
const mensajeControl = document.getElementById("mensaje");

if(edad>=18 && edad<=25){
    mensaje.value = "Estudiante maximo 22:00";
}
else if(edad>=26 && edad<=35){
    mensaje.value = "Oficinista maximo 12:00";
}else if(edad>=35 && edad<=45){
    mensaje.value = "Publico general"
}else{
    mensaje.value = "VIP";
}

//Mensajes en la etiqueta

const nombre = document.getElementById("nombre");
const edadControl = document.getElementById("edad");
nombre.innerHTML= " "+nombreEstudiante;
edadControl.value= " "+edad;


