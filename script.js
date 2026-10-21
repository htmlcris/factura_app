const nombre= "Cristian Rosero";
const edad = 19;

alert("Hola mundo, aqui ta calo")

console.log("Hola mi nombre es: "+nombre+" y tengo: "+edad+" años");
console.log("Mensaje")

//Sumas tres numeros
let num1= Number(prompt("Ingresa el numero 1:"));
let num2= Number(prompt("Ingresa el numero 1:"));
let num3= Number(prompt("Ingresa el numero 1:"));

let res = num1+num2+num3;

console.log("El resultado es: "+ res )

const resultado = document.getElementById("res");
resultado.textContent = "La suma es: "+ res;