const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");

let subtotalGeneral = 0;

document.getElementById("btnAgregar").addEventListener("click", agregarFila);

function agregarFila(){
    const filaNueva = document.createElement("tr");
    const cantV = parseInt(cantidad.value) || 0;
    const cantP = parseFloat(precio.value) || 0;
    
    const subtotal = calcularSubtotal(cantV, cantP);

    filaNueva.innerHTML = `
    <td>${producto.value}</td>
    <td>${cantV}</td>
    <td>${cantP}</td>
    <td>${subtotal}</td>`;
    
    document.getElementById("detalleFactura").appendChild(filaNueva);


    subtotalGeneral += subtotal;

   
    let ivaGeneral = calcularIVA(subtotalGeneral);
    let totalGeneral = calcularTotal(subtotalGeneral, ivaGeneral);

    document.getElementById("subtotal").innerHTML = "Subtotal: " + subtotalGeneral;
    document.getElementById("iva").innerHTML = "IVA: 15%: " + ivaGeneral;
    document.getElementById("total").innerHTML = "Total: " + totalGeneral;
}

function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function calcularIVA(subtotal) {
    return subtotal * 0.15;
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}