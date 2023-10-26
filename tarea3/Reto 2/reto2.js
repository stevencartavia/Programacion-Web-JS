function facturar() {
    const nombre = document.getElementById("nombre").value;
    const articulo = document.getElementById("articulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const resultado = document.getElementById("resultado");

    const subtotal = precio * cantidad;
    const iva = Math.round((precio * cantidad) * 0.13);
    const servicio = (precio * cantidad) * 0.05;

    if (nombre === '' || articulo === '' || precio === '' || cantidad === '') {
        swal.fire({
            icon: 'error',
            text: 'Todos los campos son obligatorios'
        })
    } else {
        const factura = `
            <p><b>Nombre del cliente:</b> ${nombre}<p>
            <p><b>Articulo comprado:</b> ${articulo}<p>
            <p><b>Cantidad:</b> ${cantidad}<p>
            <p><b>Precio:</b> ₡${precio}<p>
            <p><b>Subtotal:</b> ₡${subtotal}<p>
            <p><b>IVA 13%:</b> ₡${iva}<p>
            <p><b>Servicio 5%:</b> ₡${servicio}<p>
            <p><b>Total a pagar:</b> ₡${subtotal + iva + servicio}<p>
        `;
        resultado.innerHTML = factura;
    }
}

function limpiar() {
    location.reload();
    document.getElementById("nombre").value;
    document.getElementById("articulo").value;
    document.getElementById("precio").value;
    document.getElementById("cantidad").value;
}

function instrucciones() {
    swal.fire({
        icon: 'info',
        text: 'Ingresa la informacion necesaria en todos los campos para generar una factura digital'
    })
}