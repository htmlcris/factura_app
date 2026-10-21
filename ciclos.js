let num = Number(prompt("Desde que tabla quiere comenzar:"));
let num2 = Number(prompt("Hasta donde quieres: "));

const resul = document.getElementById("resultado");
resul.innerHTML = "";

const cuerpo = document.getElementById("cuerpo");
cuerpo.innerHTML = ""; // Limpiamos el cuerpo por si acaso

// Variable para acumular todo el código HTML de la tabla
let htmlFilas = "";

// Bucle para las tablas
for (let n = num; n <= num2; n++) {
    // Bucle del 1 al 10
    for (let i = 1; i <= 10; i++) {
        // Abrimos fila (<tr>)
        htmlFilas += "<tr>";
        
        // Celda 1: El número base
        htmlFilas += "<td>" + n + "</td>";
        
        // Celda 2: El signo por y el multiplicador
        htmlFilas += "<td> * " + i + "</td>";
        
        // Celda 3: El resultado
        htmlFilas += "<td> = " + (n * i) + "</td>";
        
        // Cerramos fila (</tr>)
        htmlFilas += "</tr>";
    }
}

// Al final, inyectamos todo el HTML acumulado de un solo golpe en el tbody
cuerpo.innerHTML = htmlFilas;

const n1= document.getElementById("num1")
const n2= document.getElementById("num2")

document.getElementById("btnSumar").addEventListener("click",function()
{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);

    let suma=num1+num2;

    document.getElementById("resultadoSuma").innerHTML="La suma es: "+suma;
});