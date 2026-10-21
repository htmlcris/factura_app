

document.getElementById("calcularTotal").addEventListener("click",function(){
    let precio=Number(document.getElementById("precio").value);
    let total=calcularTotal(precio);
    const totalP = document.getElementById("total").innerHTML = "El total a pagar es: "+total;
})

function calcularIVA(precio){
    return precio*0.15;
}

function calcularTotal(precio){
    return precio+calcularIVA(precio);
}