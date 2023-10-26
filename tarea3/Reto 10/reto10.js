const empleados = [
    {
        nombre: 'Empleado 1',
        imgSrc: './imagenes/empleado1.avif',
        cedula: '110101010'
    },
    {
        nombre: 'Empleado 2',
        imgSrc: './imagenes/empleado2.avif',
        cedula: '220202020'
    },
    {
        nombre: 'Empleado 3',
        imgSrc: './imagenes/empleado3.avif',
        cedula: '330303030'
    },
]

function buscar() {
    const cedula = document.getElementById('numCedula').value;

    if (isNaN(parseInt(cedula))) {
        swal.fire({
            icon: 'error',
            title: 'Atencion',
            text: 'El campo esta vacio / No digite letras'
        });
        return false;
    }

    let empleadoEncontrado = false;

    empleados.forEach(empleado => {
        if (cedula === empleado.cedula) {
            document.getElementById('img-empleado').src = empleado.imgSrc;
            document.getElementById('img-empleado').classList.add('img');
            empleadoEncontrado = true;
        }
    });

    if (!empleadoEncontrado) {
        swal.fire({
            icon: 'info',
            text: 'Usuario no existe'
        });
    }
}

function limpiar() {
    document.getElementById('numCedula').value = '';
    document.getElementById('resultado').innerHTML = `
        <img src="./imagenes/office.avif" id="img-empleado" alt="workers" class="img-fluid rounded img">
    `;

}